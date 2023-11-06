import axios from "axios";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const form = new FormData();

    form.append("mode", "test");

    axios
      .post("http://43.201.39.118/api/main.php", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => console.log(data));
  }, []);

  return <div>Home</div>;
}
