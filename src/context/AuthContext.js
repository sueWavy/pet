import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuthQuery";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("로그인 중 에러 발생:", error);
    return <div>로그인 중 에러 발생</div>;
  }

  if (data) {
    localStorage.setItem("token", data.token);
  }

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

  return (
    <AuthContext.Provider value={{ loginWithKakao, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
