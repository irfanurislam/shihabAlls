import { useState } from "react";
import {
  BsAppIndicator,
  BsBoxArrowInRight,
  BsChatLeftFill,
  BsChevronDown,
  BsFillHouseDownFill,
  BsFilterLeft,
  BsSearch,
  BsXLg,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className="relative font-[Poppins] w-80 ">
      {/* Toggle button for opening sidebar */}
      {/* {!isSidebarOpen && (
        <span
          onClick={toggleSidebar}
          className="absolute text-white text-4xl top-5 left-4 cursor-pointer 
          z-50"
        >
          <BsFilterLeft className="px-2 bg-gray-900 rounded-md lg:hidden" />
        </span>
      )} */}

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] 
           overflow-y-auto text-center bg-gray-900 shadow h-screen  duration-1000 ${
             isSidebarOpen ? "left-0" : "left-[-300px]"
           }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="px-2 py-1 bg-blue-600 rounded-md">
              <BsAppIndicator />
            </i>
            <h1 className="font-extrabold text-gray-200 text-[15px] ml-3">
              Projects
            </h1>
            <i
              className="ml-auto cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            >
              <BsXLg />
            </i>
          </div>
          <hr className="my-2 text-gray-600" />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <BsSearch className="text-sm" />
          <input
            type="text"
            placeholder="search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <Link to={"/"}>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <BsFillHouseDownFill />

            <span className="text-[15px] ml-4 text-gray-200">Home</span>
          </div>{" "}
        </Link>
        <Link to={"/cards"}>
          {" "}
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <BsFillHouseDownFill />

            <span className="text-[15px] ml-4 text-gray-200">Cards</span>
          </div>{" "}
        </Link>
        <hr className="my-2 text-gray-600" />
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 transition-transform duration-1000 
          cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleDropdown}
        >
          <BsChatLeftFill />
          <div className="flex justify-between w-full items-center ">
            <span className="text-[15px] ml-4 text-gray-200 ">Sidebar</span>
            <BsChevronDown
              className={`text-sm transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-700`}
            />
          </div>
        </div>
        {/* <div
          className={`text-left text-sm   font-thin mt-2 w-4/5 mx-auto text-gray-200 ${
            isDropdownOpen ? "block " : "hidden"
          }`}
        > */}
        <div
          className={`text-left text-sm font-thin mt-1 w-4/5 mx-auto text-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
            isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link to={"/sidebar"}>
            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
              SidebarLayout
            </h1>
          </Link>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social2
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social3
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social3
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social3
          </h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BsBoxArrowInRight />
          <span className="text-[15px] ml-4 text-gray-200">Logout</span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 transition-transform duration-1000 
          cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleDropdown}
        >
          <BsChatLeftFill />
          <div className="flex justify-between w-full items-center ">
            <span className="text-[15px] ml-4 text-gray-200 ">FrontEnd </span>
            <BsChevronDown
              className={`text-sm transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-700`}
            />
          </div>
        </div>
        {/* <div
          className={`text-left text-sm   font-thin mt-2 w-4/5 mx-auto text-gray-200 ${
            isDropdownOpen ? "block " : "hidden"
          }`}
        > */}
        <div
          className={`text-left text-sm font-thin mt-1 w-4/5 mx-auto text-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
            isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link to={"/movie"}>
            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
              Movie
            </h1>
          </Link>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social2
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social3
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social3
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
            Social3
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
