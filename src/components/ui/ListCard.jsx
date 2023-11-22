import React from "react";
import { GoHeart } from "react-icons/go";

export default function ListCard({
  data,
  data: {
    id,
    title,
    userName,
    petName,
    date,
    time,
    likes,
    address,
    img,
    map,
    content,
  },
}) {
  const newDate = date.toString();

  return (
    <div className="border-solid border-slate-700 max-w-xl border-2 text-center p-2 bg-white rounded-2xl">
      <div className="p-2">
        <h3 className="flex justify-around border-solid border-slate-700 border-2 p-2 rounded-2xl">
          {title}
          <span className="flex items-center gap-2">
            <span className="cursor-pointer">
              <GoHeart />
            </span>
            {likes}
          </span>
        </h3>
        <div className="mt-2">
          <p>{newDate}</p>
        </div>
        <div className="flex justify-center">
          <p className="mr-5">{address}</p>
          <p>{time}</p>
        </div>
        <div className="flex justify-center">
          <p>{userName}</p>
          <p className="mr-2 ml-2">|</p>
          <p>{petName}</p>
        </div>
      </div>
      <img src={img} alt="사진" />
      <p className="border-solid border-slate-700 border-b-2">{map}</p>
      <p>{content}</p>
    </div>
  );
}
