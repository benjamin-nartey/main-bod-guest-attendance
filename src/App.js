import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import { StaffsDataContext } from "./context/staffs-data.context";
import DashboardMetric from "./components/dashboard-metric/dashboard-metric.component";
import AllGuestData from "./routes/allguest-data/allguest-data.component";

import { useContext, useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { staffsData } = useContext(StaffsDataContext);
  const [staffDetail, setStaffDetail] = useState([]);

  const passDataToApp = (data) => {
    setStaffDetail(data);
  };

  const filteredStaffs = staffsData.filter((staffs) => {
    return (
      staffs.employeefirstname
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
      staffs.employeelastname.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
    if (event.target.value === "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  };

  console.log(searchField);
  console.log(staffDetail);

  return (
    <Routes>
      <Route
        element={
          <Navbar
            handleChange={handleChange}
            filteredStaffs={filteredStaffs}
            showSearch={showSearch}
            passDataToApp={passDataToApp}
          />
        }
      >
        <Route index element={<Home staffDetail={staffDetail} />} />
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
