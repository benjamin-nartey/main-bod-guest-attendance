import "./check-ins.css";
import { GuestContext } from "../../context/guest.context";
import { useContext } from "react";

const CheckIns = () => {
  const { todaySignin } = useContext(GuestContext);
  return (
    <div className="list-form-container">
      <div className="list-box">
        <div className="list-box-card">
          <div className="list-box-card-header">
            <span>Visitor's name</span>
            <span>Visitor's No.</span>
            <span>Tag No.</span>
            <span>Staff Name</span>
            <span>Division</span>
            <span>Department</span>
            <span>Room No</span>
            <span>Time in</span>
          </div>
          {todaySignin.map((checkin, index) => (
            <div key={index} className="list-box-card-content">
              <span>{checkin.guest_name}</span>
              <span>{checkin.guest_contact}</span>
              <span>{checkin.tag_no}</span>
              <span>{checkin.staff_name}</span>
              <span>{checkin.division}</span>
              <span>{checkin.department}</span>
              <span>{checkin.room_no}</span>
              <span>{checkin.time_in}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckIns;
