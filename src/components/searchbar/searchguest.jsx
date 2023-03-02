import "./SearchBar.css";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function SearchGuest({ placeholder, data, retrievePropFromChild }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  // const [childData, setChildData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        if(value.time_out === ""){
            return value.tag_no.toLowerCase().includes(searchWord.toLowerCase());
        }
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
            const {
              tag_no,
              guest_name,
              guest_contact,
              staff_name,
              room_no,
              divsion,
              department,
            } = value;
            if (tag_no || guest_name) {
              return (
                <h4
                  key={value.id}
                  className="guest-dataItem"
                  onClick={() => retrievePropFromChild(value)}
                >
                  <span className="item-row">
                    <p>{`${guest_name} `}</p> <p>{`${guest_contact} `}</p>
                    <p>{`${tag_no} `}</p> <p>{`${staff_name} `}</p>
                    <p>{`${room_no} `}</p> <p>{`${divsion} `}</p>
                    <p>{`${department} `}</p>
                  </span>
                </h4>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default SearchGuest;
