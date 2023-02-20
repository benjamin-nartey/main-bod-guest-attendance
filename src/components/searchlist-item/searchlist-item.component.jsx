const SearchlistItem = ({ staff, passData }) => {
  const handleStaffClick = () => {
    passData(staff);
  };

  return (
    <h4 className="searchlist-items" onClick={handleStaffClick}>
      <span>{`${staff.employeefirstname} ${staff.employeelastname}`} </span>
      <span className="department">{staff.employeedepartment}</span>
    </h4>
  );
};

export default SearchlistItem;
