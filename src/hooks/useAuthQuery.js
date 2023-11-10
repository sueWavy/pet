import { useQuery } from "react-query";
import axios from "axios";

const LOGIN_API = process.env.REACT_APP_KAKAO_LOGIN_API;

export const useAuthQuery = (accessToken) => {
  return useQuery("auth", () => fetchData(accessToken), {
    // enabled: !!accessToken,
    onError: (error) => {
      console.log("Auth 데이터 실패", error);
    },
  });
};

const fetchData = async (accessToken) => {
  const form = new FormData();
  form.append("mode", "kakao");
  form.append("token", accessToken);

  const response = await axios.post(LOGIN_API, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
