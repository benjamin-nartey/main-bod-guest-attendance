import { useState, useContext } from "react";
import { StaffsDataContext } from "../../context/staffs-data.context";
import { BiSearch } from "react-icons/bi";
import Scroll from "../scroll/scroll.component";
import SearchList from "../search-list/search-list.component";

const defaultSearchField = {
  searchFieldData: "",
};

const Search = ({ passDataToParent }) => {
  const { staffsData } = useContext(StaffsDataContext);
  const [searchField, setSearchField] = useState(defaultSearchField);
  const [showSearch, setShowSearch] = useState(false);
  const [childSecond, setChildSecond] = useState([]);

  const passDataLevel2 = (data) => {
    setChildSecond(data);
  };

  const passOnDataToParent = () => {
    passDataToParent(childSecond);
  };

  passOnDataToParent();

  const { searchFieldData } = searchField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchField({ ...searchField, [name]: value });
    if (value === "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  };

  console.log(searchField);
  // console.log(childSecond);

  const filteredStaffs = staffsData.filter((staff) => {
    if (searchFieldData === "") {
      return staff;
    } else {
      return (
        staff.employeefirstname
          .toLowerCase()
          .includes(searchFieldData.toLowerCase()) ||
        staff.employeelastname
          .toLowerCase()
          .includes(searchFieldData.toLowerCase())
      );
    }
  });

  function searchList() {
    if (showSearch) {
      return (
        <Scroll childSecond={childSecond}>
          <SearchList
            filteredStaffs={filteredStaffs}
            passDataLevel2={passDataLevel2}
          />
        </Scroll>
      );
    }
  }

  return (
    <>
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder=" Search..."
          name="searchFieldData"
          value={searchFieldData}
          onChange={handleChange}
        />
        <BiSearch className="search-icon" />
      </div>
      {searchList()}
    </>
  );
};

export default Search;
