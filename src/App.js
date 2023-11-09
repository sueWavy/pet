import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const { Kakao } = window;
  const KAKAO_KEY = process.env.REACT_APP_KAKAO_API;

  if (Kakao) {
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_KEY);
    }
  } else {
    console.error("Kakao object is not defined.");
  }

  console.log(window.Kakao);

  return (
    <>
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
