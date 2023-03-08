import "./dashboard-metric.styles.css";
import MetricCard from "../metric-card/metric-card.component";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GuestContext } from "../../context/guest.context";

const DashboardMetric = () => {
  const { allGuest, todaySignin, todaySignout, todayOnPremise } =
    useContext(GuestContext);

  return (
    <div className="dashboard-metric-container">
      <Link className="link-class link-1" to="/dashboard/allguest-data">
        <MetricCard cardType="all_visitors">
          <div className="metric-label-container">
            <h4 className="metric-name">All Visitors</h4>
            <span className="metirc-description">total number of visitors</span>
            <h2 className="metric-figures">{allGuest.length}</h2>
          </div>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon" />
          </div>
        </MetricCard>
      </Link>
      <Link className="link-class link-2" to="/dashboard/check-ins">
        <MetricCard cardType="contract">
          <div className="metric-label-container">
            <h4 className="metric-name">Today's Check-ins</h4>
            <span className="metirc-description">
              total number of check-ins today
            </span>
            <h2 className="metric-figures">{todaySignin.length}</h2>
          </div>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon" />
          </div>
        </MetricCard>
      </Link>
      <Link className="link-class link-3" to="/dashboard/check-outs">
        <MetricCard>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon-2" />
          </div>
          <div className="metric-label-container-2">
            <h4 className="metric-name">Today's Check-outs</h4>
            <span className="metirc-description">
              total number of check-outs today
            </span>
            <h2 className="metric-figures">{todaySignout.length}</h2>
          </div>
        </MetricCard>
      </Link>
      <Link className="link-class link-4" to="">
        <MetricCard cardType="official">
          <div className="metric-label-container">
            <h4 className="metric-name">On Premise</h4>
            <span className="metirc-description">
              total number of visitors on Premise
            </span>
            <h2 className="metric-figures">{todayOnPremise.length}</h2>
          </div>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon" />
          </div>
        </MetricCard>
      </Link>
      <Link className="link-class link-5" to="">
        <MetricCard>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon-2" />
          </div>
          <div className="metric-label-container-2">
            <h4 className="metric-name">Emergency</h4>
            <span className="metirc-description">
              total number of emergency visitors
            </span>
            <h2 className="metric-figures">loading...</h2>
          </div>
        </MetricCard>
      </Link>
    </div>
  );
};

export default DashboardMetric;
