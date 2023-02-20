import "./dashboard-metric.styles.css";
import MetricCard from "../metric-card/metric-card.component";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const DashboardMetric = () => {
  return (
    <div className="dashboard-metric-container">
      <Link className="link-class link-1" to="">
        <MetricCard cardType="all_visitors">
          <div className="metric-label-container">
            <h4 className="metric-name">All Visitors</h4>
            <span className="metirc-description">total number of visitors</span>
            <h2 className="metric-figures">1500</h2>
          </div>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon" />
          </div>
        </MetricCard>
      </Link>
      <Link className="link-class link-2" to="">
        <MetricCard cardType="contract">
          <div className="metric-label-container">
            <h4 className="metric-name">Contract</h4>
            <span className="metirc-description">
              total number of contract visitors
            </span>
            <h2 className="metric-figures">1500</h2>
          </div>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon" />
          </div>
        </MetricCard>
      </Link>
      <Link className="link-class link-3" to="">
        <MetricCard>
          <div className="metric-icon-div">
            <BsPeople className="metric-icon-2" />
          </div>
          <div className="metric-label-container-2">
            <h4 className="metric-name">Meeting</h4>
            <span className="metirc-description">total number of visitors</span>
            <h2 className="metric-figures">1500</h2>
          </div>
        </MetricCard>
      </Link>
      <Link className="link-class link-4" to="">
        <MetricCard cardType="official">
          <div className="metric-label-container">
            <h4 className="metric-name">Official</h4>
            <span className="metirc-description">
              total number of official visitors
            </span>
            <h2 className="metric-figures">1500</h2>
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
            <h2 className="metric-figures">1500</h2>
          </div>
        </MetricCard>
      </Link>
    </div>
  );
};

export default DashboardMetric;