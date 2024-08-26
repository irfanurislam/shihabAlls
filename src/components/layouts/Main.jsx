import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Dashboard from "./dashboard/Dashboard";
import DashNav from "./dashboard/DashNav";
import { useState } from "react";

const Main = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    // <div className="flex flex-col min-h-screen">
    //   <Navbar />
    //   <div className="flex flex-1">
    //     <Sidebar />
    //     <div className="flex-1 flex justify-center items-center">
    //       {/* Outlet renders the child route components */}
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
    <div className="flex">
      <SideNav sidebarToggle={sidebarToggle}></SideNav>
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      ></Dashboard>
    </div>
  );
};

export default Main;
