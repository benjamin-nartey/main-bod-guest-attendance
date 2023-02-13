import "./navbar.styles.css";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { RiUserSearchLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="menu-container">
          <div className="menu-icon-box">
            <AiOutlineLogin className="icons" />
            <span>logout</span>
          </div>
          <div className="menu-icon-box">
            <RiUserSearchLine className="icons" />
            <span>guest</span>
          </div>
          <div className="menu-icon-box">
            <TbReport className="icons" />
            <span>records</span>
          </div>
          <div className="search-container">
            <input
              className="search-bar"
              type="text"
              placeholder=" Search..."
            />
            <BiSearch className="search-icon" />
          </div>
        </div>
        <div className="welcome-box">
          <h4 className="welcome-text">
            <span className="welcome-text-1">Welcome</span>
            <span className="welcome-text-2">Benjamin</span>
          </h4>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
