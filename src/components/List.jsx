import React from "react";
import dummyData from "../data/dummyData";
import ListCard from "./ui/ListCard";

export default function List() {
  const data = dummyData;

  return (
    <div className="grid grid-cols-4 gap-2 p-3 bg-slate-200 md:grid-cols-2 s:grid-cols-1">
      {data.map((it) => (
        <ListCard key={it.id} data={it} />
      ))}
    </div>
  );
}
