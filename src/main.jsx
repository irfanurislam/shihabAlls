import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layouts/Main.jsx";
import Cards from "./pages/Cards.jsx";
import DashLayout from "./components/layouts/dashboard/DashLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/cards",
        element: <Cards></Cards>,
      },
    ],
  },
  {
    path: "/sidebar",
    element: <DashLayout></DashLayout>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
