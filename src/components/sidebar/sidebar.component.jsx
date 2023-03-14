import "./sidebar.styles.css";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar-links-container">
      <Link className="sidebar-navlink" to="/dashboard">
        <MdOutlineDashboardCustomize className="icons sidebar-icons" />
        <span className="link-text">Dashboard</span>
      </Link>
      <Link className="sidebar-navlink" to="/admin">
        <MdOutlineDashboardCustomize className="icons sidebar-icons" />
        <span className="link-text">Admin</span>
      </Link>
    </div>
  );
};
export default Sidebar;
