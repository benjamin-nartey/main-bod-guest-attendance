import "./GuestLeave.styles.css";
import { GuestContext } from "../../context/guest.context";
import { useContext } from "react";
import SearchGuest from "../../components/searchbar/searchguest";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import db from "../../utils/firebase.utils";

import swal from "sweetalert";

const GuestLeave = () => {
  const [guestDetail, setGuestDetail] = useState([]);
  const { allGuest } = useContext(GuestContext);
  const retrievePropFromChild = (data) => {
    setGuestDetail(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const clearGuestDetail = () => {
    setGuestDetail([]);
  };
  const current = new Date();
  const time_out = current.toLocaleString();

  const handleSignOut = async (id) => {
    const docRef = doc(db, "visitors", id);
    const payload = { ...guestDetail, time_out: time_out };
    setDoc(docRef, payload)
      .then(swal("Guest SignedOut!", "Guest has exit the premises!", "success"))
      .then(clearGuestDetail());
  };

  return (
    <div className="guest-leave-container">
      <div className="guest-search-wrapper">
        <SearchGuest
          placeholder="Search by tag..."
          data={allGuest}
          retrievePropFromChild={retrievePropFromChild}
        />
      </div>
      {guestDetail.length !== 0 && (
        <div className="sign-out-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="form-box">
                <span>Visitor's Name</span>
                <span>{guestDetail?.guest_name}</span>
              </div>
              <div className="form-box">
                <span>Visitor's Contact</span>
                <span>{guestDetail?.guest_contact}</span>
              </div>
              <div className="form-box">
                <span>Tag Number</span>
                <span>{guestDetail?.tag_no}</span>
              </div>
              <div className="form-box">
                <span>Staff Name</span>
                <span>{guestDetail?.staff_name}</span>
              </div>
              <div className="form-box">
                <span>Department</span>
                <span>{guestDetail?.department}</span>
              </div>
              <div className="form-box">
                <span>Room Number</span>
                <span>{guestDetail?.room_no}</span>
              </div>
              <div className="form-box">
                <span>Time In</span>
                <span>{guestDetail?.time_in}</span>
              </div>
            </div>

            <button
              onClick={() => handleSignOut(guestDetail.id)}
              className="btn-signOut"
            >
              Signout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default GuestLeave;
