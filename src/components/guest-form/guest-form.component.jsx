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

const current = new Date();
const time_in = current.toLocaleString();

const defaultFormFields = {
  // staff_name: "",
  // department: "",
  // room_no: "",
  // personal_line: "",
  // direct_line: "",
  // extension: "",
  guest_name: "",
  gender: "",
  guest_contact: "",
  company: "",
  visit_type: "",
  time_in: `${time_in}`,
  time_out: "",
};

const GuestForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { staffsData } = useContext(StaffsDataContext);
  const [staffDetail, setStaffDetail] = useState([]);
  const [tagDetail, setTagDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    // staff_name,
    // department,
    // room_no,
    // personal_line,
    // direct_line,
    // extension,
    guest_name,
    gender,
    guest_contact,
    company,
    visit_type,
  } = formFields;

  const staff_name = staffDetail?.employee;
  const department = staffDetail?.Department?.departmentname;
  const division = staffDetail?.DDivisions?.divisionname;
  const room_no = staffDetail?.roomno;
  const direct_line = staffDetail?.directno;
  const extension = staffDetail?.extensionno;
  const tag_no = tagDetail?.tagValue;

  const clearFormFields = () => {
    setFormFields({
      guest_name: "",
      gender: "",
      tag_no: "",
      guest_contact: "",
      company: "",
      visit_type: "",
      time_in: `${time_in}`,
      time_out: "",
      staff_name: "",
      department: "",
      division: "",
      room_no: "",
      direct_line: "",
      extension: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
      staff_name,
      department,
      division,
      room_no,
      direct_line,
      extension,
      tag_no,
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
                <span>Visit Type</span>
                <select
                  required
                  value={visit_type}
                  name="visit_type"
                  className="select"
                  onChange={handleChange}
                >
                  <option value="">Select Visit Type</option>
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
