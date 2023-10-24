"use client";

import { useRef } from "react";

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const postNumRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const prefectureRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <h1 className="text-center text-xl my-10">登録フォーム</h1>
      <form className="w-3/5 mx-auto text-lg flex flex-col space-y-6">
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
        </div>
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
        </div>
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
        </div>
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
        </div>
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
        </div>
      </form>
    </main>
  );
}
