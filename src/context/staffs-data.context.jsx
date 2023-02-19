import { createContext, useState, useEffect } from "react";
import api from "../api/staffs";

export const StaffsDataContext = createContext({
  staffsData: [],
  setStaffsData: () => [],
});

export const StaffsDataProvider = ({ children }) => {
  const [staffsData, setStaffsData] = useState([]);

  // const fetchStaffsData = async () => {
  //   const response = await api.get("/employeesMysql");
  //   const data = response.data;
  //   setStaffsData(data);
  //   console.log(data, "showwww");
  // };

  useEffect(() => {
    api
      .get("/employeesMysql")
      .then((response) => setStaffsData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const value = { staffsData };

  console.log(staffsData, "fffffff");

  return (
    <StaffsDataContext.Provider value={value}>
      {children}
    </StaffsDataContext.Provider>
  );
};
