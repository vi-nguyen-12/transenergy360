import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../../css/banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <Row className="banner-container">
        <Col xs={12} lg={6}>
          <img src="./images/Mask Group 6.png" className="banner" />
        </Col>

        <Col xs={12} lg={6}>
          <Row style={{ display: "flex" }}>
            <Col className="about">
              <h2>EMR PROCESSING OF METHANE HYDRATES USING REHM</h2>
              <p>
                REHM provides a means to extract gaseous methane from globally
                abundant methane hydrates. It uses Electro Magnetic Resonance
                (EMR) to selectively transfer energy for the dissociation of
                methane from hydrate. Resulting methane is used for power
                generation, with emissions converted to fertilizers for
                afforestation, and surplus reinjected underground. The process
                will be self-sustaining using biofuels when forestation is
                initiated. It is globally applicable due to presence of hydrates
                near population centers and decentralized community operated
                projects are visualized.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItemstems: "center",
                  marginTop: "40px",
                }}
              >
                <button className="button-1">LEARN MORE</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="banner-container-1">
        <Col xs={12} lg={6} className="banner-left">
          <div className="content-left">
            <h1>USING SOLAR ENERGY CAPTURED BY THE OCEAN USING ARCS</h1>

            <p>
              ARCS provides a means to use solar energy captured by the oceans
              for emission-free power generation.
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
    </div>
  );
};

export default Banner;
