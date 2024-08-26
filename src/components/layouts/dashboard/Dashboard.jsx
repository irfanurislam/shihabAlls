import DashNav from "./DashNav";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? " " : "ml-64"} w-full`}>
      <DashNav
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      ></DashNav>
    </div>
  );
};

export default Dashboard;
