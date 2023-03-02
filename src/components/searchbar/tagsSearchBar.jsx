import "./SearchBar.css";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function TagsSearchBar({ placeholder, data, retrieveTagDetail, value }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  //   useEffect(() => {
  //     if (value) {
  //       setWordEntered(value);
  //     }
  //   }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      console.log(value);
      return (
        value.label.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.tagValue.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered(value);
  };
  window.addEventListener("click", clearInput);
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={wordEntered}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <BiSearch className="search-icon" />
          ) : (
            <MdClose
              className="search-icon"
              id="clearBtn"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, index) => {
            const { tagValue, label } = value;
            if (tagValue || label) {
              return (
                <h4
                  key={index}
                  className="dataItem"
                  onClick={() => retrieveTagDetail(value)}
                >
                  <p>{`${tagValue} `}</p>
                </h4>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default TagsSearchBar;
