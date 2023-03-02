import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../utils/firebase.utils";

export const GuestContext = createContext({
  allGuest: [],
  setAllGuest: () => [],
});

export const GuestProvider = ({ children }) => {
  const [allGuest, setAllGuest] = useState([]);
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

  const value = { allGuest };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
};
