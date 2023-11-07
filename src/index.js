import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import DefaultLayout from "./layout/DefaultLayout";
import NoHeaderLayout from "./layout/NoHeaderLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <DefaultLayout>
        <NotFound />
      </DefaultLayout>
    ),
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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  // </React.StrictMode>
);
