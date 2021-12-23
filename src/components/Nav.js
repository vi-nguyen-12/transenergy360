import React from "react";
import { Row, Nav, Dropdown } from "react-bootstrap";
import "../css/Nav.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <button className="nav-item">HOME</button>
        <button className="nav-item">TECHNOLOGY</button>
        <button className="nav-item">ABOUT US</button>
      </div>
      {/* <Dropdown>
        <Dropdown.Toggle className="nav-btn"></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
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
