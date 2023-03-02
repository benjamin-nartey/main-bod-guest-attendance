import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import DashboardMetric from "./components/dashboard-metric/dashboard-metric.component";
import AllGuestData from "./routes/allguest-data/allguest-data.component";
import GuestLeave from "./routes/guest-leave/GuestLeave.component";

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="guest-out" element={<GuestLeave />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardMetric />} />
          <Route path="metric" element={<DashboardMetric />} />
          <Route path="allguest-data" element={<AllGuestData />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
