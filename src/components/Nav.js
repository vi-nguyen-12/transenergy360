import React from "react";
import { Row, Nav } from "react-bootstrap";
import "../css/Nav.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <button className="nav-item">HOME</button>
        <button className="nav-item">TECHNOLOGY</button>
        <button className="nav-item">ABOUT US</button>
      </div>
      <div className="nav-btn">
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
};

export default NavBar;
