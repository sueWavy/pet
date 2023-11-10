import { useQuery } from "react-query";
import axios from "axios";

const useAuthQuery = async () => {
  const accessToken = localStorage.getItem("token");
  const form = new FormData();
  form.append("mode", "kakao");
  form.append("token", accessToken);

  const response = await axios.post("http://43.201.39.118/api/login", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export function useAuth() {
  const { data, isLoading, isError, error } = useQuery(
    "authData",
    useAuthQuery,
    {
      // onSettled은 쿼리가 성공적으로 해결되었거나 오류가 발생한 후에 호출.
      onSettled: (data, error) => {
        // 로딩 처리 또는 정리 작업을 여기서 수행.
      },
    }
  );

  if (isLoading) {
    // 로딩 상태.
    return <div>Loading...</div>;
  }

  // 에러, 데이터 등의 상태를 처리.

  return { data, isError, error };
}
