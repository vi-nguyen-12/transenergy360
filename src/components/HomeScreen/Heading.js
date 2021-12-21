import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import mainImg from "../../images/main.png";
import "../../css/Heading.css";

const Heading = () => {
  return (
    <div className="heading-main">
      <div className="left">
        <div className="top">
          <img src="images/logo.png" style={{ width: "300px" }} />
          <h1>LEADING THE GLOBAL ENERGY TRANSITION TO A LOW CARBON FUTURE </h1>
          <p>
            We are TransEnergy360, a Texas based clean energy company offering
            innovative technologies to support the global energy transition.{" "}
          </p>
          <p>
            Our mission is to enable countries around the world to be energy
            self-reliant by using our proprietary methane hydrate RHEM
            technology, our proprietary oceanic refrigerant ARCS technology, and
            our proprietary SWERS wasted heat recovery system from thermal power
            plants
          </p>
          <div className="btn-group">
            <button style={{ marginRight: "30px" }}>LEARN MORE</button>
            <button> CONTACT US</button>
          </div>
        </div>
        <div className="bottom">
          <img
            src="images/island.png"
            style={{ width: "30%", height: "100%" }}
          />
          <div className="content">
            <h4>
              TRANSENERGY360 IS COMMITTED TO TRANSFORMING THE ENERGY LANDSCAPE
              USING LOW CARBON POWER GENERATION TECHNOLOG
            </h4>
            <p>
              The introduction of REHM, ARCS, and SWERS technologies into the
              landscape will create a better future for the energy industry
            </p>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Heading;
