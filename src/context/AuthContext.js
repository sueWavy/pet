import React, { createContext, useContext, useState } from "react";
import { useAuthQuery } from "../hooks/useAuthQuery";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const accessToken = localStorage.getItem("token", "토큰자리");
  const navigate = useNavigate();

  const { data: authData, isLoading, error } = useAuthQuery(accessToken);

  /** 카카오 로그인 기능  */
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
    if (authData) {
      localStorage.setItem("token", authData.token);
      localStorage.setItem("name", "이름");
      localStorage.setItem("email", "이메일");
      window.location.href = "/";
    } else {
      console.error("로그인 실패");
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
    <AuthContext.Provider
      value={{ authData, isLoading, error, kakaoLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
