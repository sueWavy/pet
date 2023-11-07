import React from "react";
import { MdPets } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const inputStyle =
    "border-solid border-slate-300 border-2 rounded-2xl p-1 text-center";
  const boxStyle =
    "w-96 flex flex-col items-center justify-center rounded-2xl p-4 bg-white space-y-3 relative z-10";

  return (
    // <div className="w-screen h-screen flex flex-col justify-center items-center space-y-5 bg-brand">
    <div className="relative w-screen h-screen flex flex-col justify-center items-center space-y-5">
      <video
        src="/assets/dog.mp4"
        autoPlay
        muted
        loop
        className="object-cover object-center w-full h-full absolute inset-0 z-0"
      />

      <section className={boxStyle}>
        <div className="flex items-center space-x-1 text-2xl">
          <h1>멍개팅</h1>
          <MdPets />
        </div>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            className={inputStyle}
            placeholder="아이디를 입력하세요"
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="패스워드를 입력하세요"
          />
          <button className="bg-brand p-1 rounded-xl text-white hover:brightness-110 ">
            로그인
          </button>
          <p className="text-center text-slate-400">⎯⎯⎯⎯ 또는 ⎯⎯⎯⎯</p>
          <div>
            <div className="flex items-center space-x-2 justify-center cursor-pointer">
              <FcGoogle /> <span>구글로 로그인하기</span>
            </div>
            <p className="text-brand text-sm text-center mt-2 cursor-pointer">
              비밀번호를 잊어버리셨나요 ?
            </p>
          </div>
        </div>
      </section>
      <section className={boxStyle}>
        <div>
          <span>
            혹시 아이디가 없으신가요 ?{" "}
            <b className="cursor-pointer text-brand">회원가입</b>
          </span>
        </div>
      </section>
    </div>
  );
}
