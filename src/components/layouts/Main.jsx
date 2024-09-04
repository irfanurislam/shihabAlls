import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Dashboard from "./dashboard/Dashboard";
import DashNav from "./dashboard/DashNav";
import { useState } from "react";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* <div className="flex flex-col min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="flex-1 flex justify-center items-center">
            Outlet renders the child route components <Outlet />
          </div>
        </div>
      </div> */}

      <div>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="max-w-[1260px] mx-auto">
        <div className="flex">
          <Sidebar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="flex-2  ml-5">
            {/* Outlet renders the child route components  */}
            <Outlet />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Main;
