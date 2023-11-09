import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
  };

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    const form = new FormData();
    form.append("mode", "kakao");
    form.append("code", code);

    axios
      .post("http://43.201.39.118/api/login", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.token !== null) {
          navigate("/");
          setUser(res.data);
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ loginWithKakao, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
