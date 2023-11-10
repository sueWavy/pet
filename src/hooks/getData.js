import axios from "axios";
import { useQuery } from "react-query";

const TEST_API = process.env.REACT_APP_DATA_API;

const fetchData = async () => {
  const form = new FormData();
  form.append("mode", "test");

  const response = await axios.post(TEST_API, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const useGetData = () => {
  return useQuery("data", fetchData);
};
