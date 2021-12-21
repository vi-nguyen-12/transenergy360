import React from "react";
import "../../css/Banner2.css";
import { Row, Col } from "react-bootstrap";

const Banner2 = () => {
  return (
    <Row className="banner-container">
      <Col xs={12} lg={6} className="banner-left">
        <div className="content-left">
          <h1>USING SOLAR ENERGY CAPTURED BY THE OCEAN USING ARCS</h1>

          <p>
            ARCS provides a means to use solar energy captured by the oceans for
            emission-free power generation.
          </p>
        </div>
      </Col>
      <Col xs={12} lg={6} className="banner-right">
        <div className="content-right">
          <h1>POWER GENERATION ENERGY RECOVERY USING SWERS</h1>
          <p>
            SWERS provides ability to save water and recover waste energy in
            thermal power plants.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Banner2;
