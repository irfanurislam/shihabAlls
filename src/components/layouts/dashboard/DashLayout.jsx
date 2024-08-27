import React, { useState } from "react";
import SideNav from "../SideNav";
import Dashboard from "./Dashboard";

const DashLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <SideNav sidebarToggle={sidebarToggle}></SideNav>
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      ></Dashboard>
    </div>
  );
};

export default DashLayout;
