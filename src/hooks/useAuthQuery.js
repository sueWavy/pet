import { useQuery } from "react-query";
import axios from "axios";

export const useAuthQuery = (accessToken, userData) => {
  return useQuery("auth", () => fetchToken(accessToken, userData), {
    onError: (error) => {
      console.log("Auth 데이터 실패", error);
    },
  });
};

const fetchToken = async (accessToken, userData) => {
  const form = new FormData();
  form.append("mode", "kakao");
  form.append("token", accessToken);

  const data = await fetchData(userData);

  const response = await axios.post("http://43.201.39.118/api/login", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(response);
  return response.data;
};

const fetchData = async (userData) => {
  const form = new FormData();
  form.append("mode", "check");
  form.append("user", userData);

  const response = await axios.post("http://43.201.39.118/api/login", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
  return response.data;
};
