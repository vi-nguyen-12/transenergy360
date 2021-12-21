import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import mainImg from "../../images/main.png";
import "../../css/Heading.css";

const Heading = () => {
  return (
    <Row style={{ height: "100vh" }}>
      <Col xs={12} lg={5} className="left">
        <div
          style={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="top"
        >
          <img src="images/logo.png" style={{ width: "300px" }} />
          <h1>INVESTING IN AN ENERGY DISRUPTING TECHNOLOGY </h1>
          <p>
            We are Resonant Exploration & Production (REP) Technology. A Texas
            based, clean-tech company with roots in international deep water oil
            and gas exploration, including production operations.{" "}
          </p>
          <p>
            We believe there is a tremendous business case and financial
            opportunity to corner the energy market with the use of REP
            Technology which will redefine the carbon energy market.
          </p>
          <div className="btn-group">
            <button style={{ marginRight: "30px" }}>LEARN MORE</button>
            <button> CONTACT US</button>
          </div>
        </div>
        <Row className="bottom">
          <div className="islandImg"></div>
          <img
            src="images/island.png"
            style={{ width: "30%", height: "100%" }}
          />
          <div className="content" style={{ width: "70%" }}>
            <h4>
              LCT360 IS COMMITTED TO CHANGING THE LANDSCAPE OF Methane Hydrates
            </h4>
            <p>
              Find out how we are changing the game for the entire industry
              through advanced technology and design.
            </p>
          </div>
        </Row>
      </Col>
      <Col xs={12} lg={7} className="right"></Col>
    </Row>
  );
};

export default Heading;
