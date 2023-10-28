"use client";

import { useRef, useState } from "react";
import { ZodError, z } from "zod";

const UserSchema = z.object({
  name: z.string().min(1, { message: "名前を入力して下さい。" }),
  postNum: z.number().min(1, { message: " 郵便番号を入力して下さい。" }).max(7),
  mail: z.string().email({ message: "メールアドレスの形式ではありません。" }),
  prefecture: z.string().min(1, { message: "出身県を入力して下さい。" }),
  password: z.string().min(1, { message: "パスワードを入力して下さい。" }),
});

type User = z.infer<typeof UserSchema>;

const postUser = async ({
  name,
  postNum,
  mail,
  prefecture,
  password,
}: User) => {
  const res = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, postNum, mail, prefecture, password }),
  });
  const data = await res.json();
  return console.log(data);
};

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const postNumRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const prefectureRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<any>(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: User = {
      name: nameRef.current!.value,
      postNum: parseInt(postNumRef.current!.value),
      mail: mailRef.current!.value,
      prefecture: prefectureRef.current!.value,
      password: passwordRef.current!.value,
    };

    // const name: string = nameRef.current!.value;
    // const postNum: number = parseInt(postNumRef.current!.value);
    // const mail: string = mailRef.current!.value;
    // const prefecture: string = prefectureRef.current!.value;
    // const password: string = passwordRef.current!.value;

    try {
      const result = UserSchema.safeParse({ ...user });
      console.log(result);
      await postUser({ ...user });
    } catch (err) {
      if (err instanceof ZodError) {
        setErrors(err.flatten().fieldErrors);
        console.log(errors);
      }
    }
  };

  return (
    <main>
      <h1 className="text-center text-xl my-10">登録フォーム</h1>
      <form
        onSubmit={handleSubmit}
        className="w-3/5 mx-auto text-lg flex flex-col space-y-6"
      >
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="w-1/4 text-center">
            名前
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            name="name"
            placeholder="中村　淳"
            className="bg-gray-50 rounded-md border-2 shadow-md px-3 py-1 w-3/4"
          />
          {errors?.name && <p>{errors.name}</p>}
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="postNum" className="w-1/4 text-center">
            郵便番号
          </label>
          <input
            ref={postNumRef}
            type="text"
            id="postNum"
            name="postNum"
            placeholder="8402106"
            className="bg-gray-50 rounded-md border-2 shadow-md px-3 py-1 w-3/4"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="mail" className="w-1/4 text-center">
            メールアドレス
          </label>
          <input
            ref={mailRef}
            type="text"
            id="mail"
            name="mail"
            placeholder="jun@gmail.com"
            className="bg-gray-50 rounded-md border-2 shadow-md px-3 py-1 w-3/4"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="prefecture" className="w-1/4 text-center">
            出身県
          </label>
          <input
            ref={prefectureRef}
            type="text"
            id="prefecture"
            name="prefecture"
            placeholder="福岡県"
            className="bg-gray-50 rounded-md border-2 shadow-md px-3 py-1 w-3/4"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="w-1/4 text-center">
            パスワード
          </label>
          <input
            ref={passwordRef}
            type="text"
            id="password"
            name="password"
            placeholder="1234"
            className="bg-gray-50 rounded-md border-2 shadow-md px-3 py-1 w-3/4"
          />
        </div>
        <button
          className="bg-blue-100 rounded-md py-2 shadow-md hover:bg-blue-500
         hover:-translate-y-1 text-white font-bold"
        >
          登録
        </button>
      </form>
    </main>
  );
}
