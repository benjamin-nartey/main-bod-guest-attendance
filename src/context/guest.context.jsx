import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../utils/firebase.utils";

const current = new Date();
const today_time = current.toLocaleString();

export const GuestContext = createContext({
  allGuest: [],
  setAllGuest: () => [],
  todaySignin: [],
  todaySignout: [],
});

export const GuestProvider = ({ children }) => {
  const [allGuest, setAllGuest] = useState([]);
  const [todaySignin, setTodaySignin] = useState([]);
  const [todaySignout, setTodaySignout] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "visitors"), (snapshot) => {
      const allVisitorsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAllGuest(allVisitorsData);
    });
    return unsubscribe;
  }, []);

  console.log("allGuest", allGuest);

  const handleGuestFilter = () => {
    const newFilterSignin = allGuest.filter((guest) => {
      return guest.time_in.slice(0, 8) === today_time.slice(0, 8);
    });

    const newFilterSignout = allGuest.filter((guest) => {
      return guest.time_out.slice(0, 8) === today_time.slice(0, 8);
    });

    console.log("hhhhhhh", newFilterSignin);
    console.log("aaaa", newFilterSignout);

    return setTodaySignin(newFilterSignin), setTodaySignout(newFilterSignout);
  };

  useEffect(() => {
    handleGuestFilter();
  }, [allGuest]);

  console.log("ttttttttt", todaySignin);

  const value = { allGuest, todaySignin, todaySignout };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
};
