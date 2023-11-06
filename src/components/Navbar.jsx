import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex space-x-5 text-lg">
        <li>로그인</li>
        {/* 모달 창으로 로그인/회원가입 구현하기 */}
        <li>마이페이지</li>
        {/* Link 태그로 - 라우팅 설정하기 */}
      </ul>
    </div>
  );
}
