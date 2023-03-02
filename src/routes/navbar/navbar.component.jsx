import "./navbar.styles.css";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbReport } from "react-icons/tb";
// import Search from "../../components/search/search.component";

const Navbar = (
  {
    // handleChange,
    // filteredStaffs,
    // showSearch,
    // passDataToApp,
  }
) => {
  // const [childElement, setChildElement] = useState([]);

  // const passDataToParent = (data) => {
  //   setChildElement(data);
  // };

  // const dataPassFunction = () => {
  //   passDataToApp(childElement);
  // };

  // dataPassFunction();
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="menu-container">
          <Link to="/dashboard" className="menu-icon-box">
            <MdOutlineDashboardCustomize className="icons" />
            <span>dashboard</span>
          </Link>
          <Link to="/" className="menu-icon-box">
            <AiOutlineHome className="icons" />
            <span>Home</span>
          </Link>
          <Link to="/guest-out" className="menu-icon-box">
            <TbReport className="icons" />
            <span>Out</span>
          </Link>
          {/* <Search
            handleChange={handleChange}
            filteredStaffs={filteredStaffs}
            showSearch={showSearch}
            passDataToParent={passDataToParent}
          /> */}
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
