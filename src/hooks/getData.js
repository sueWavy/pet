import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async () => {
  const form = new FormData();
  form.append("mode", "test");

  const response = await axios.post("http://43.201.39.118/api/main.php", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const useGetData = () => {
  return useQuery("data", fetchData);
};
