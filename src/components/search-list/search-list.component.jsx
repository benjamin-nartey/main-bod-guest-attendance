import "./searchlist.styles.css";
import SearchlistItem from "../searchlist-item/searchlist-item.component";
import { useState } from "react";

const SearchList = ({ filteredStaffs, passDataLevel2 }) => {
  const [childFirst, setChildFirst] = useState([]);

  const passData = (data) => {
    setChildFirst(data);
  };

  const passOnDataToSearchComponent = () => {
    passDataLevel2(childFirst);
  };

  passOnDataToSearchComponent();

  const filtered = filteredStaffs.map((staff) => (
    <SearchlistItem key={staff.id} staff={staff} passData={passData} />
  ));

  return <div className="searchlist-container">{filtered}</div>;
};
export default SearchList;
