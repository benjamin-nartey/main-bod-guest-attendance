import "./guest-form.styles.css";
import { genderOptions } from "../../utils/gender-options.utils";
import { useState } from "react";

const defaultFormFields = {
  staff_name: "",
  department: "",
  room_no: "",
  personal_line: "",
  direct_line: "",
  extension: "",
  guest_name: "",
  gender: "",
  tag_no: "",
  guest_contact: "",
  relationship: "",
  reason: "",
};

const GuestForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    staff_name,
    department,
    room_no,
    personal_line,
    direct_line,
    extension,
    guest_name,
    gender,
    tag_no,
    guest_contact,
    relationship,
    reason,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  console.log(formFields);

  return (
    <div className="form-container">
      <form>
        <div className="form-input-control">
          <div className="form-input-group">
            <span>Name</span>
            <input
              name="staff_name"
              value={staff_name}
              disabled
              className="disabled"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Department</span>
            <input
              name="department"
              type="text"
              value={department}
              disabled
              className="disabled"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Room No</span>
            <input
              name="room_no"
              type="text"
              value={room_no}
              disabled
              className="disabled"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Personal Line</span>
            <input
              name="personal_line"
              type="text"
              value={personal_line}
              disabled
              className="disabled"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Direct Line</span>
            <input
              name="direct_name"
              type="text"
              value={direct_line}
              disabled
              className="disabled"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Extention</span>
            <input
              name="extention"
              type="text"
              value={extension}
              disabled
              className="disabled"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-input-control">
          <div className="form-input-group">
            <span>Guest Name</span>
            <input
              name="guest_name"
              type="text"
              value={guest_name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Gender</span>
            <select
              required
              value={gender}
              name="gender"
              className="select"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              {genderOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-input-group">
            <span>Tag No</span>
            <input
              name="tag_no"
              type="text"
              value={tag_no}
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Contact</span>
            <input
              name="guest_contact"
              type="text"
              value={guest_contact}
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <span>Relationship with staff</span>
            <select
              required
              value={relationship}
              name="relationship"
              className="select"
              onChange={handleChange}
            >
              <option value="">Select Relationship</option>
              {genderOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-input-group">
            <span>Reasons for visit</span>
            <select
              required
              value={reason}
              name="reason"
              className="select"
              onChange={handleChange}
            >
              <option value="">Select Reason</option>
              {genderOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default GuestForm;
