"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z
  .object({
    email: z
      .string()
      .email({ message: "メールアドレスの形式ではありません。" })
      .min(1, { message: "１文字以上入力する必要があります。" }),
    password: z
      .string()
      .min(1, { message: "１文字以上入力する必要があります。" }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

type Login = z.infer<typeof loginSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <main className="bg-yellow-50 min-h-screen p-10">
      <section className="bg-white md:w-1/2 w-4/5 mx-auto rounded-md shadow-md p-10">
        <h1 className="text-2xl text-center">React Hook Form Learning</h1>
        <form onSubmit={onSubmit} className="my-10 flex flex-col space-y-10">
          <div className="flex justify-between">
            <label htmlFor="email" className="w-1/3 text-center">
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "入力が必須の項目です。",
                },
              })}
              className="w-2/3 rounded-md bg-gray-50 shadow-md px-3 py-1"
            />
          </div>

          <div className="text-red-500 text-center">
            {errors.email?.message}
          </div>

          <div className="flex justify-between">
            <label htmlFor="password" className="w-1/3 text-center">
              パスワード
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              className="w-2/3 rounded-md bg-gray-50 shadow-md px-3 py-1"
            />
          </div>

          <div className="text-red-500 text-center">
            {errors.password?.message}
          </div>

          <div>
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>

          <button type="submit">ログイン</button>
        </form>
      </section>
    </main>
  );
};

export default Form;
