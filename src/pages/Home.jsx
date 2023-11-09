import React, { useState } from "react";
import { useGetData } from "../hooks/getData";
import List from "../components/List";
import { useAuthContext } from "../context/AuthContext";

function Home() {
  const { data, isLoading, isError, error } = useGetData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <main>
      <List />
    </main>
  );
}

export default Home;
