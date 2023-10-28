"use client";

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(errors.email);

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
              {...register("email", { required: true })}
              className="w-2/3 rounded-md bg-gray-50 shadow-md px-3 py-1"
            />
          </div>
          {errors.email && (
            <div className="text-center">入力が必須の項目です</div>
          )}
          <div className="flex justify-between">
            <label htmlFor="password" className="w-1/3 text-center">
              パスワード
            </label>
            <input
              id="password"
              {...register("password")}
              className="w-2/3 rounded-md bg-gray-50 shadow-md px-3 py-1"
            />
          </div>
          <button
            type="submit"
            className="rounded-md px-3 py-1 bg-blue-100 shadow-md hover:bg-blue-300 hover:-translate-y-1"
          >
            ログイン
          </button>
        </form>
      </section>
    </main>
  );
};

export default form;
