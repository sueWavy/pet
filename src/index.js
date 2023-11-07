import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoHeaderLayout from "./layout/NoHeaderLayout";
import DefaultLayout from "./layout/DefaultLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <NoHeaderLayout>
            <Login />
          </NoHeaderLayout>
        ),
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
