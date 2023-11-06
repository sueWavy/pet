import React from "react";
import { MdPets } from "react-icons/md";
import Weather from "./Weather";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-around text-white text-3xl p-4 bg-brand font-[KCCChassam] ">
        <div className="flex">
          <MdPets />
          <h1 className="ml-2">같이 산책할땐 멍개팅</h1>
        </div>
        <Navbar />
      </header>
      <div className="">
        <Weather />
      </div>
    </>
  );
}
