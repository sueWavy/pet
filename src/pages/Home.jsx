import React from "react";
import { useGetData } from "../hooks/getData";

function Home() {
  const { data, isLoading, isError, error } = useGetData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Home;
