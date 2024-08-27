import { useState } from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const DashNav = ({ sidebarToggle, setSidebarToggle }) => {
 
  return (
    <nav className="bg-gray-900  px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars
          onClick={() => setSidebarToggle(!sidebarToggle)}
          className="text-white me-4 cursor-pointer lg:hidden"
        ></FaBars>
        <span className="text-white font-semibold">Ecoomers</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-64">
          <span className="relative md:absolute pl-2 inset-y-0 left-0 flex items-center">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            type="text"
          />
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6"></FaBell>
        </div>
        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1"></FaUserCircle>
            <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
              <ul className="py-2 text-sm text-gray-950 ">
                <li className="py-2">
                  <a href="#">Profile</a>
                </li>
                <li className="py-2">
                  <a href="#">Setting</a>
                </li>
                <li className="py-2">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
