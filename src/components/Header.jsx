import React from "react";
import { MdPets } from "react-icons/md";
import Weather from "./Weather";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-center text-white text-3xl p-4 bg-brand font-[KCCChassam] ">
        <MdPets />
        <h1 className="ml-2">같이 산책할땐 멍개팅</h1>
      </header>
      <Weather />
    </>
  );
}
