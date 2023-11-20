import React from "react";

export default function ListCard({
  data,
  data: { id, title, userName, date, time, likes, address, img, map, content },
}) {
  const newDate = date.toString();

  return (
    <div className="border-solid border-slate-700 max-w-xl border-2">
      <h3>{title}</h3>
      <div>
        <p>{userName}</p>
        <p>{newDate}</p>
        <p>좋아요 : {likes}</p>
      </div>
      <div>
        <p>{address}</p>
        <p>{time}</p>
      </div>
      <img src={img} alt="사진" />
      <p>{map}</p>
      <p>{content}</p>
    </div>
  );
}
