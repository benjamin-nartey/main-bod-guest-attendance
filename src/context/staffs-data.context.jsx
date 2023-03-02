import { createContext, useState, useEffect } from "react";
import api from "../api/staffs";

export const StaffsDataContext = createContext({
  staffsData: [],
  setStaffsData: () => [],
});

export const StaffsDataProvider = ({ children }) => {
  const [staffsData, setStaffsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const fetchStaffsData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/directory");
      const data = response.data;
      setStaffsData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    fetchStaffsData();
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);
    // return () => {
    //   window.removeEventListener("online", handleStatusChange);
    //   window.removeEventListener("offline", handleStatusChange);
    // };
  }, [isOnline]);

  const value = { staffsData, loading };

  console.log(staffsData, "fffffff");

  return (
    <StaffsDataContext.Provider value={value}>
      {children}
    </StaffsDataContext.Provider>
  );
};
