import "../checkins/check-ins.css";
import { GuestContext } from "../../context/guest.context";
import { useContext } from "react";

const OnPremise = () => {
  const { todayOnPremise } = useContext(GuestContext);
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
            <span>Time Out</span>
          </div>
          {todayOnPremise.map((onPremise, index) => (
            <div key={index} className="list-box-card-content">
              <span>{onPremise.guest_name}</span>
              <span>{onPremise.guest_contact}</span>
              <span>{onPremise.tag_no}</span>
              <span>{onPremise.staff_name}</span>
              <span>{onPremise.division}</span>
              <span>{onPremise.department}</span>
              <span>{onPremise.room_no}</span>
              <span>{onPremise.time_in}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnPremise;
