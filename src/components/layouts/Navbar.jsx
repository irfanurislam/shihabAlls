import React, { useState } from "react";
import {
  BsApp,
  BsBoxArrowInRight,
  BsChatLeftFill,
  BsChevronDown,
  BsFillHouseDownFill,
  BsSearch,
  BsXLg,
} from "react-icons/bs";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-blue-600 border-red-400 border-2 font-[Poppins]">
      <div
        className={`sidebar ${
          isSidebarOpen ? "left-0" : "left-[-300px]"
        } fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-auto text-center bg-gray-900 transition-all duration-300`}
      >
        <span
          onClick={toggleSidebar}
          className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        >
          <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md">
              <BsApp />
            </i>

            <h1 className="font-extrabold text-gray-200 text-[15px] ml-3">
              Projects
            </h1>
            <i
              className="bi bi-x ml-20 cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            >
              <BsXLg />
            </i>
          </div>
          <hr className="my-2 text-gray-600" />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm">
            <BsSearch />
          </i>
          <input
            type="text"
            placeholder="search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
         cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-house-door-fill">
            <BsFillHouseDownFill />
          </i>
          <span className="text-[15px] ml-4 text-gray-200">Home</span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
         cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-bookmark-fill">
            <BsFillHouseDownFill />
          </i>
          <span className="text-[15px] ml-4 text-gray-200">Home two</span>
        </div>
        <hr className="my-2 text-gray-600" />
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
         cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-chat-left-text-full">
            <BsChatLeftFill />
          </i>
          <div
            className="flex justify-between w-full items-center"
            onClick={toggleDropdown}
          >
            <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
            <span
              className={`text-sm ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
              id="arrow"
            >
              <i className="bi bi-chat-left-text-full">
                <BsChevronDown />
              </i>
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 ${
            isDropdownOpen ? "block" : "hidden"
          }`}
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social2
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social3
          </h1>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
         cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-box-arrow-right">
            <BsBoxArrowInRight />
          </i>
          <span className="text-[15px] ml-4 text-gray-200">logout</span>
        </div>
      </div>
    </div> //body
  );
};

export default Navbar;
