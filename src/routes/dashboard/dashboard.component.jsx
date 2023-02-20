import "./dashboard.styles.css";
import Sidebar from "../../components/sidebar/sidebar.component";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
