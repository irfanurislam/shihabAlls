import { FaCog, FaHome, FaRadiation, FaRegEnvelope } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SideNav = ({ sidebarToggle }) => {
  console.log(sidebarToggle);
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
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaCog className="inline-block w-6 h-6 mr-3 -mt-2"></FaCog>
            Setting
          </a>
        </li>
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
