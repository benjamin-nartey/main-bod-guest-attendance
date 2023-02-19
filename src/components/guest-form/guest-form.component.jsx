import "./guest-form.styles.css";
import { genderOptions } from "../../utils/gender-options.utils";
import { reasonsOptions } from "../../utils/reasons-options.utils";
import { relationshipOptions } from "../../utils/relationship-options.utils";
import { useState } from "react";

const defaultFormFields = {
  // staff_name: "",
  // department: "",
  // room_no: "",
  // personal_line: "",
  // direct_line: "",
  // extension: "",
  guest_name: "",
  gender: "",
  tag_no: "",
  guest_contact: "",
  relationship: "",
  reason: "",
};

const GuestForm = ({ staffDetail }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    // staff_name,
    // department,
    // room_no,
    // personal_line,
    // direct_line,
    // extension,
    guest_name,
    gender,
    tag_no,
    guest_contact,
    relationship,
    reason,
  } = formFields;

  const staff_name = `${staffDetail.employeefirstname} ${staffDetail.employeelastname}`;
  const department = staffDetail.employeedepartment;
  const room_no = null;
  const personal_line = staffDetail.employeephone;
  const direct_line = null;
  const extension = null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
      staff_name,
      department,
      room_no,
      personal_line,
      direct_line,
      extension,
    });
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
              readOnly
              className="readonly"
              type="text"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input-group">
            <span>Department</span>
            <input
              name="department"
              type="text"
              value={department}
              readOnly
              className="readonly"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input-group">
            <span>Room No</span>
            <input
              name="room_no"
              type="text"
              value={room_no}
              readOnly
              className="readonly"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input-group">
            <span>Personal Line</span>
            <input
              name="personal_line"
              type="text"
              value={personal_line}
              readOnly
              className="readonly"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input-group">
            <span>Direct Line</span>
            <input
              name="direct_name"
              type="text"
              value={direct_line}
              readOnly
              className="readonly"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input-group">
            <span>Extention</span>
            <input
              name="extention"
              type="text"
              value={extension}
              readOnly
              className="readonly"
              onChange={handleChange}
              required
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
              required
            />
          </div>
          <div className="form-input-group">
            <span>Contact</span>
            <input
              name="guest_contact"
              type="text"
              value={guest_contact}
              onChange={handleChange}
              required
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
              {relationshipOptions.map((option) => (
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
              {reasonsOptions.map((option) => (
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
