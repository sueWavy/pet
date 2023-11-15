import "./App.css";
import { Outlet } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const { Kakao } = window;
  const KAKAO_KEY = process.env.REACT_APP_KAKAO_API;
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API;

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
        <GoogleOAuthProvider clientId={GOOGLE_KEY}>
          <Outlet />
        </GoogleOAuthProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
