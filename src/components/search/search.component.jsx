import { BiSearch } from "react-icons/bi";
import Scroll from "../scroll/scroll.component";
import SearchList from "../search-list/search-list.component";
import { useState } from "react";

const Search = ({
  handleChange,
  filteredStaffs,
  showSearch,
  passDataToParent,
}) => {
  const [childSecond, setChildSecond] = useState([]);

  const passDataLevel2 = (data) => {
    setChildSecond(data);
  };

  const passOnDataToParent = () => {
    passDataToParent(childSecond);
  };

  passOnDataToParent();
  function searchList() {
    if (showSearch) {
      return (
        <Scroll>
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
          onChange={handleChange}
        />
        <BiSearch className="search-icon" />
      </div>
      {searchList()}
    </>
  );
};

export default Search;
