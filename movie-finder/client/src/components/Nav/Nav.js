import React, { useState, useEffect } from "react";
import "./Nav.css";
//import SearchField from "react-search-field";

function Nav() {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-blue"}`}>
      <img
        className="nav-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ni9r3LhDapbQosovY-Sdq_sig66BJretyQ&usqp=CAU"
        alt="Logo"
      />
    
    {/* <SearchField 
  placeholder='Search item'
  onEnter={onEnter}
/> */}
      <input placeholder="Search" type="search" className="search" />
      <img
        className="nav-user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRS2taclnle8LZtRzmOCNLPstxPYgYKGH2A&usqp=CAU"
        alt="User Profile"
      />
    </div>
  );
}

export default Nav;
