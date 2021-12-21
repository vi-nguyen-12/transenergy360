import React from "react";
import { Row, Nav } from "react-bootstrap";
import "../css/Nav.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div>
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Technology</button>
        <button className="nav-btn">Process</button>
        <button className="nav-btn">About Us</button>
        <button className="nav-btn">Contact</button>
      </div>
    </div>
  );
};

export default NavBar;
