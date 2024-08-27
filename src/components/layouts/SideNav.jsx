import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaCog, FaHome, FaRadiation, FaRegEnvelope } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SideNav = ({ sidebarToggle }) => {
  console.log(sidebarToggle);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-gray-900 fixed h-full font-[Roboto] px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold">Admin Dahsboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-3 -mt-2"></FaHome>
            Sidebar
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaRegEnvelope className="inline-block w-6 h-6 mr-3 -mt-2"></FaRegEnvelope>
            Ibox
          </a>
        </li>
        <li
          onClick={toggleDropdown}
          className="mb-2 rounded  hover:shadow hover:bg-blue-500 py-2 "
        >
          <div className="flex justify-between items-center w-full">
            <a href="" className="px-3">
              <FaCog className="inline-block w-6 h-6 mr-3 -mt-2"></FaCog>
              Setting
            </a>
            <BsChevronDown
              className={`mr-3 cursor-pointer text-sm transform  
             ${
               isDropdownOpen ? "rotate-180" : "rotate-0"
             } transition-transform duration-700`}
            />
          </div>
        </li>
        <div
          className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 transition-all duration-700 ease-in-out overflow-hidden ${
            isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
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
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaRadiation className="inline-block w-6 h-6 mr-3 -mt-2"></FaRadiation>
            Reports
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
