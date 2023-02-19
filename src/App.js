import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";
import Dashboard from "./routes/dashboard/dashboard.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
