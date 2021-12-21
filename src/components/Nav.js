import React from "react";
import { Row, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Row
    // style={{ display: "flex", justifyContent: "flex-end" }}
    // className="fixed-top"
    >
      <Nav
        className="justify-content-end fixed-top"
        style={{ padding: "20px 40px 0 0" }}
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: "white" }}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" style={{ color: "white" }}>
            Technology
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: "white" }}>
            Process
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-30" style={{ color: "white" }}>
            About Us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" style={{ color: "white" }}>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
  );
};

export default NavBar;
