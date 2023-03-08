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
  const [todayOnPremise, setTodayOnPremises] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "visitors"), (snapshot) => {
      const allVisitorsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAllGuest(allVisitorsData);
      handleGuestFilter(allVisitorsData);
    });
    return unsubscribe;
  }, []);

  const handleGuestFilter = (allGuest) => {
    const newFilterSignin = allGuest.filter((guest) => {
      return guest?.time_in?.slice(0, 8) === today_time?.slice(0, 8);
    });

    const newFilterSignout = allGuest.filter((guest) => {
      return guest?.time_out?.slice(0, 8) === today_time?.slice(0, 8);
    });

    const newFilterOnPremise = allGuest.filter((guest) => {
      return (
        guest?.time_in?.slice(0, 8) === today_time?.slice(0, 8) &&
        guest?.time_out === ""
      );
    });

    return (
      setTodaySignin(newFilterSignin),
      setTodaySignout(newFilterSignout),
      setTodayOnPremises(newFilterOnPremise)
    );
  };

  // useEffect(() => {
  //   if (allGuest.length > 0) {
  //     handleGuestFilter();
  //   }
  // }, [allGuest]);

  const value = { allGuest, todaySignin, todaySignout, todayOnPremise };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
};
