import React from "react";

export default function Write() {
  return (
    <div className="flex flex-col h-screen items-center border-slate-400 border-2">
      <form
        className="flex flex-col border-2 border-slate-800 w-2/4 h-screen items-center justify-around p-5"
        action=""
        method="post"
      >
        <input
          className="border-2 border-slate-800 w-full h-10 placeholder:text-center rounded-2xl"
          type="text"
          placeholder="제목을 입력하세요"
        />
        <div className="border-2 border-slate-800 w-full text-center">
          지도를 입력하세요 ( 카카오 API )
        </div>
        <input className="border-2 border-slate-800 w-full" type="file" />
        <textarea
          className="border-2 border-slate-800 w-full mt-3 placeholder:p-2 h-3/5"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="내용을 입력해주세요"
        ></textarea>
        <button
          className="border-2 border-slate-800 w-full
        "
          type="button"
        >
          글쓰기
        </button>
      </form>
    </div>
  );
}
