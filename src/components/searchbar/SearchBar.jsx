import "./SearchBar.css";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function SearchBar({ placeholder, data, retrievePropFromChild }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.employee.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  useEffect(() => {
    window.addEventListener("click", clearInput);
  }, []);

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
            const { employee, DDivisions, Department } = value;
            if (employee || DDivisions || Department) {
              return (
                <h4
                  key={index}
                  className="dataItem"
                  onClick={() => retrievePropFromChild(value)}
                >
                  <p className="employee-name">{`${employee} `}</p>
                  <p className="designation"> {`${DDivisions.divisionname}`}</p>
                  <p className="designation">{`${Department.departmentname} `}</p>
                </h4>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
