import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
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
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="./Logo_Netflix.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="./icon.png"
        alt="Netflix Icon"
      />
    </div>
  );
}

export default Navbar;
