import React, { createContext, useContext } from "react";
import { useAuthQuery } from "../hooks/useAuthQuery";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const accessToken = localStorage.getItem("token", "토큰자리");
  const navigate = useNavigate();

  const { data: authData, isLoading, error } = useAuthQuery(accessToken);

  /** 로그인 기능  */
  const login = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
    if (authData) {
      localStorage.setItem("token", authData.token);
      localStorage.setItem("name", "이름");
      localStorage.setItem("email", "이메일");
      window.location.href = "/";
    } else {
      console.error("Authentication data is not available");
      // merge 용
    }
  };

  /** 로그아웃 기능 */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ authData, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
