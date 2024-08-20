import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage.jsx";
import Main from "./Layouts/Main.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import Signup from "./components/Authentication/Signup.jsx";
import Login from "./components/Authentication/Login.jsx";
import Calculator from "./components/page/Calculator.jsx";
import PrivateRouters from "./providers/PrivateRouters.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/calculator",
        element: (
          <PrivateRouters>
            <Calculator />
          </PrivateRouters>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
