import React from "react";
import { MdPets } from "react-icons/md";
import { BsFillSearchHeartFill } from "react-icons/bs";
import Weather from "./Weather";

export default function Header() {
  return (
    <>
      <header className="w-full p-4 bg-brand font-[KCCChassam]  ">
        <nav className="flex items-center justify-around">
          <div className="flex items-center text-white text-2xl">
            <MdPets />
            <h1 className="ml-2">같이 산책할땐 멍개팅</h1>
          </div>
          <div className="flex items-center bg-white rounded-xl pl-3 overflow-hidden">
            <input type="text" className="mr-2 focus:outline-none" />
            <BsFillSearchHeartFill className=" text-brand mr-2" />
          </div>
          <ul className="flex items-center text-white space-x-5">
            <li className="cursor-pointer border border-solid rounded-lg px-5  border-white hover:scale-105">
              로그인
            </li>
            <li className="cursor-pointer hover:scale-105">회원가입</li>
          </ul>
        </nav>
      </header>
      <div>
        <Weather />
      </div>
    </>
  );
}
