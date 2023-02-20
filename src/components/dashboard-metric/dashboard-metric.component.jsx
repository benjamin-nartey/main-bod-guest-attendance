import "./dashboard-metric.styles.css";
import MetricCard from "../metric-card/metric-card.component";

const DashboardMetric = () => {
  return (
    <div className="dashboard-metric-container">
      <MetricCard />
      <MetricCard />
      <MetricCard />

      {/* <MetricCard /> */}
    </div>
  );
};

export default DashboardMetric;
