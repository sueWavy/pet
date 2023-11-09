import React from "react";
import dummyData from "../data/dummyData";
import ListCard from "./ui/ListCard";

export default function List() {
  const data = dummyData;

  return (
    <div>
      {data.map((it) => (
        <ListCard key={it.id} data={it} />
      ))}
    </div>
  );
}
