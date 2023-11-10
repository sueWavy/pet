import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const form = new FormData();
    form.append("mode", "kakao");
    form.append("token", accessToken);

    axios
      .post("http://43.201.39.118/api/login", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((error) => {
        console.error("Error during login:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ loginWithKakao, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
