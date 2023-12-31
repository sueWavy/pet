import { GiSittingDog } from "react-icons/gi";
import { BsFillSearchHeartFill } from "react-icons/bs";
import Weather from "./Weather";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { logout } = useAuthContext();

  const handleHome = (e) => {
    navigate("/");
  };

  const handleLogin = (e) => {
    navigate("/login");
  };

  const handleWrite = (e) => {
    navigate("/write");
  };

  return (
    <>
      <header className="w-screen p-4 bg-brand font-[KCCChassam]">
        <nav className="flex items-center justify-around md:flex-col">
          <div
            onClick={handleHome}
            className="flex items-center cursor-pointer text-white text-3xl  md:mb-3"
          >
            <GiSittingDog />
            <h1 className="ml-2 font-[YEONGJUPunggiGinsengTTF] ">
              같이 산책할 땐 멍개팅
            </h1>
          </div>
          <form className="flex items-center bg-white rounded-xl pl-3 overflow-hidden md:mb-3">
            <input type="text" className="mr-2 focus:outline-none" />
            <BsFillSearchHeartFill className=" text-brand mr-2" />
          </form>
          <ul className="flex items-center text-white space-x-5">
            {token ? (
              <li className="px-5">님 어서오세요.</li>
            ) : (
              <li
                onClick={handleLogin}
                className="cursor-pointer border border-solid rounded-lg px-5  border-white hover:scale-105"
              >
                로그인
              </li>
            )}
            {token && (
              <li
                onClick={logout}
                className="cursor-pointer border border-solid rounded-lg px-5  border-white hover:scale-105"
              >
                로그아웃
              </li>
            )}
            {token && (
              <li className="cursor-pointer border border-solid rounded-lg px-5  border-white hover:scale-105">
                마이페이지
              </li>
            )}
            {token && (
              <li
                onClick={handleWrite}
                className="cursor-pointer border border-solid rounded-lg px-5  border-white hover:scale-105"
              >
                글쓰기
              </li>
            )}
          </ul>
        </nav>
      </header>
      <div>
        <Weather />
      </div>
    </>
  );
}
