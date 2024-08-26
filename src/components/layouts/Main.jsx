import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      {/* <Navbar></Navbar> */}
    </div>
  );
};

export default Main;
