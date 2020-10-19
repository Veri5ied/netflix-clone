import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "./Logo_Netflix.png"
import Icon from "./icon.png"

function Navbar() {

    const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${handleShow && "nav__black"}`}>
      <img
        className="nav__logo"
        src={Logo}
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src={Icon}
        alt="Netflix Icon"
      />
    </div>
  );
}

export default Navbar;
