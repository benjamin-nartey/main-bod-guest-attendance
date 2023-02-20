import "./sidebar.styles.css";
import { Link } from "react-router-dom";
import { BsPeople } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar-links-container">
      <Link className="sidebar-navlink" to="">
        <BsPeople className="icons sidebar-icons" />{" "}
        <span className="link-text"> All Visitors</span>
      </Link>
      <Link className="sidebar-navlink" to="contract">
        <BsPeople className="icons sidebar-icons" />{" "}
        <span className="link-text">Contracts</span>
      </Link>
      <Link className="sidebar-navlink" to="contract">
        <BsPeople className="icons sidebar-icons" />{" "}
        <span className="link-text">Official</span>
      </Link>
      <Link className="sidebar-navlink" to="contract">
        <BsPeople className="icons sidebar-icons" />{" "}
        <span className="link-text">Meetings</span>
      </Link>
      <Link className="sidebar-navlink" to="contract">
        <BsPeople className="icons sidebar-icons" />{" "}
        <span className="link-text">Emergency</span>
      </Link>
    </div>
  );
};
export default Sidebar;
