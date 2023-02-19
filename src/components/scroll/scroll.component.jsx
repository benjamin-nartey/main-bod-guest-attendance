import "./scroll.styles.css";
import { useEffect, useRef, useState } from "react";

const Scroll = ({ children, childSecond }) => {
  const inputDiv = useRef();
  const [show, setShow] = useState(true);
  const [key, setKey] = useState();

  const handleHideElement = () => {
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleHideElement);
  }, []);

  const keyDown = (e) => {
    setKey(e.key);
  };
  const mouseEnter = (e) => {
    inputDiv.current.focus();
    // inputDiv.styles.border = "none";
  };

  return (
    show && (
      <div
        ref={inputDiv}
        onMouseEnter={mouseEnter}
        onKeyDown={keyDown}
        tabIndex={-1}
        className="scroll-div"
      >
        {children}
      </div>
    )
  );
};
export default Scroll;
