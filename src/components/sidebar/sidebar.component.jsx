import "./sidebar.styles.css";
import { Link } from "react-router-dom";
import { BsPeople } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar-links-container">
      <Link className="sidebar-navlink" to="/dashboard/allguest-data">
        <BsPeople className="icons sidebar-icons" />
        <span className="link-text"> All Visitors</span>
      </Link>
    </div>
  );
};
export default Sidebar;
