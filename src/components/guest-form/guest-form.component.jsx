import "./guest-form.styles.css";
import { genderOptions } from "../../utils/gender-options.utils";
import { reasonsOptions } from "../../utils/reasons-options.utils";
import { useState, useContext } from "react";
import db from "../../utils/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import swal from "sweetalert";
import SearchBar from "../searchbar/SearchBar";
import { tagNo } from "../../utils/tag-no.utils";
import { StaffsDataContext } from "../../context/staffs-data.context";
import TagsSearchBar from "../searchbar/tagsSearchBar";
import Loader from "../loader/loader.component";

const defaultFormFields = {
  guest_name: "",
  gender: "",
  guest_contact: "",
  company: "",
  purpose: "",
  time_out: "",
};

const defaultOtherFields = {
  staff_name: "",
  department: "",
  division: "",
  tag_no: "",
  room_no: "",
  direct_line: "",
  extension: "",
  time_in: "",
};

const GuestForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [otherFields, setOtherFields] = useState(defaultOtherFields);
  const { staffsData } = useContext(StaffsDataContext);
  const [staffDetail, setStaffDetail] = useState([]);
  const [tagDetail, setTagDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeIn, setTimeIn] = useState("");

  let {
    staff_name,
    department,
    division,
    tag_no,
    room_no,
    direct_line,
    extension,
    time_in,
  } = otherFields;

  const { guest_name, gender, guest_contact, company, purpose } = formFields;

  if (staffDetail.length !== 0) {
    staff_name = staffDetail?.employee;
    department = staffDetail?.Department?.departmentname;
    division = staffDetail?.DDivisions?.divisionname;
    room_no = staffDetail?.roomno;
    direct_line = staffDetail?.directno;
    extension = staffDetail?.extensionno;
    tag_no = tagDetail?.tagValue;
    time_in = timeIn;
  }

  const clearFormFields = () => {
    setFormFields({
      ...defaultFormFields,
      ...defaultOtherFields,
    });
    setOtherFields({ ...defaultOtherFields });
    setStaffDetail([]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTimeIn(() => new Date().toLocaleString());
    setFormFields({
      ...formFields,
      [name]: value,
      ...otherFields,
      staff_name: staffDetail?.employee,
      department: staffDetail?.Department?.departmentname,
      division: staffDetail?.DDivisions?.divisionname,
      room_no: staffDetail?.roomno,
      direct_line: staffDetail?.directno,
      extension: staffDetail?.extensionno,
      tag_no: tagDetail?.tagValue,
      time_in: timeIn,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const collectionRef = collection(db, "visitors");
      const payload = formFields;
      await addDoc(collectionRef, payload)
        .then(setLoading(false))
        .then(
          swal(
            "Form Submitted!",
            "Guest data has been added to database!",
            "success"
          )
        )
        .then(clearFormFields());
    } catch (error) {
      console.log(error);
    }
  };

  const retrievePropFromChild = (data) => {
    setStaffDetail(data);
  };

  const retrieveTagDetail = (data) => {
    setTagDetail(data);
  };

  console.log(formFields);
  return (
    <>
      {!loading ? (
        <div className="form-container">
          <div className="searchbar-wrapper">
            <SearchBar
              placeholder="Search....."
              data={staffsData}
              retrievePropFromChild={retrievePropFromChild}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-input-control">
              <div className="form-input-group">
                <span>Staff Name</span>
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
                <span>Division</span>
                <input
                  name="division"
                  type="text"
                  value={division}
                  readOnly
                  className="readonly"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input-group">
                <span>Room No.</span>
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
                <span>Visitor's Name</span>
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
                <span>Tag No.</span>
                <div className="tagSearchInput">
                  <TagsSearchBar
                    placeholder="search tags..."
                    data={tagNo}
                    retrieveTagDetail={retrieveTagDetail}
                    value={tag_no}
                  />
                </div>
              </div>
              <div className="form-input-group">
                <span>Visitor's Contact</span>
                <input
                  name="guest_contact"
                  type="text"
                  value={guest_contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input-group">
                <span>Company</span>
                <input
                  name="company"
                  type="text"
                  value={company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-input-group">
                <span>Purpose Of Visit</span>
                <select
                  required
                  value={purpose}
                  name="purpose"
                  className="select"
                  onChange={handleChange}
                >
                  <option value="">Select Purpose</option>
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default GuestForm;
