import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex justify-center items-center">
          {/* Outlet renders the child route components */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
