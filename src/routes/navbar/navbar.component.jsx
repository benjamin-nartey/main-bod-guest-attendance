import "./navbar.styles.css";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbReport } from "react-icons/tb";
import Search from "../../components/search/search.component";
import Home from "../home/home.component";

const Navbar = () => {
  const [staffDetail, setStaffDetail] = useState([]);

  const passDataToParent = (data) => {
    setStaffDetail(data);
  };

  return (
    <Fragment>
      <div className="navbar-container">
        <div className="menu-container">
          <div className="menu-icon-box">
            <AiOutlineLogin className="icons" />
            <span>logout</span>
          </div>
          <Link to="/dashboard" className="menu-icon-box">
            <MdOutlineDashboardCustomize className="icons" />
            <span>dashboard</span>
          </Link>
          <div className="menu-icon-box">
            <TbReport className="icons" />
            <span>records</span>
          </div>
          <Search passDataToParent={passDataToParent} />
        </div>
        <div className="welcome-box">
          <h4 className="welcome-text">
            <span className="welcome-text-1">Welcome</span>
            <span className="welcome-text-2">Benjamin</span>
          </h4>
        </div>
      </div>
      {staffDetail.length !== 0 ? <Home staffDetail={staffDetail} /> : null}
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
