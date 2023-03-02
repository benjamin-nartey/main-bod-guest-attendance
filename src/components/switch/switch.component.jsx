import { useState } from "react";

const SwitchComponent = ({ id, label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className="checkbox-wrapper">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default SwitchComponent;
