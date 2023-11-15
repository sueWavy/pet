import { useQuery } from "react-query";
import axios from "axios";

export const useAuthQuery = (accessToken) => {
  return useQuery("auth", () => fetchData(accessToken), {
    onError: (error) => {
      console.log("Auth 데이터 실패", error);
    },
  });
};

const fetchData = async (accessToken) => {
  const form = new FormData();
  form.append("mode", "check");
  form.append("token", accessToken);

  const response = await axios.post("http://43.201.39.118/api/login", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
  return response.data;
};
