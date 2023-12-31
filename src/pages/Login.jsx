import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useAuthContext } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const inputStyle =
    "border-solid border-slate-300 border-2 rounded-2xl p-1 text-center";
  const boxStyle =
    "w-96 flex flex-col items-center justify-center rounded-2xl p-4 bg-white space-y-3 relative z-10";

  const { kakaoLogin } = useAuthContext();

  return (
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
          <h1>로그인</h1>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2 justify-center cursor-pointer">
            {/* <FcGoogle /> <span>구글로 로그인하기</span> */}
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>

          <p className="text-center text-slate-400">⎯⎯⎯⎯ 또는 ⎯⎯⎯⎯</p>
          <div>
            <div
              onClick={kakaoLogin}
              className="flex items-center space-x-2 justify-center cursor-pointer"
            >
              <RiKakaoTalkFill /> <span>카카오로 로그인하기</span>
            </div>
          </div>
        </div>
      </section>
      <section className={boxStyle}>
        <div>
          <span>
            멍개팅을 원활히 이용하려면 <b className=" text-brand">로그인</b> 을
            해야합니다.
          </span>
        </div>
      </section>
    </div>
  );
}
