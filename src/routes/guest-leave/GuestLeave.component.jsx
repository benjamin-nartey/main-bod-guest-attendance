import "./GuestLeave.styles.css";
import SwitchComponent from "../../components/switch/switch.component";
import { GuestContext } from "../../context/guest.context";
import { useContext } from "react";
import SearchGuest from "../../components/searchbar/searchguest";
import { useState } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import db from "../../utils/firebase.utils";
import { async } from "@firebase/util";
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
  const current = new Date();
  const time_out = current.toLocaleString();

  const handleSignOut = async (id) => {
    const docRef = doc(db, "visitors", id);
    const payload = { ...guestDetail, time_out: time_out };
    setDoc(docRef, payload);
    swal("Guest SignedOut!", "Guest has exit the premises!", "success");
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
      <div className="sign-out-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="form-box">
              <span>GUEST_NAME</span>
              <span>{guestDetail?.guest_name}</span>
            </div>
            <div className="form-box">
              <span>GUEST_CONTACT</span>
              <span>{guestDetail?.guest_contact}</span>
            </div>
            <div className="form-box">
              <span>TAG_NO</span>
              <span>{guestDetail?.tag_no}</span>
            </div>
            <div className="form-box">
              <span>STAFF_NAME</span>
              <span>{guestDetail?.staff_name}</span>
            </div>
            <div className="form-box">
              <span>DEPARTMENT</span>
              <span>{guestDetail?.department}</span>
            </div>
            <div className="form-box">
              <span>ROOM_NO</span>
              <span>{guestDetail?.room_no}</span>
            </div>
            <div className="form-box">
              <span>TIME_IN</span>
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
    </div>
  );
};
export default GuestLeave;
