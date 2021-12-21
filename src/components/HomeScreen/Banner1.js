import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../../css/banner1.css";

const Banner1 = () => {
  return (
    <div className="banner-1">
      <Row style={{ display: "flex" }}>
        <Col xs={12} lg={6}>
          <img
            src="./images/Mask Group 6.png"
            className="banner1"
            style={{ width: "100%" }}
          />
        </Col>

        <Col xs={12} lg={6}>
          <Row style={{ display: "flex" }}>
            <Col className="about">
              <h2>EMR PROCESSING OF METHANE HYDRATES USING REHM</h2>
              <p className="about-1">
                REHM provides a means to extract gaseous methane from globally
                abundant methane hydrates. It uses Electro Magnetic Resonance
                (EMR) to selectively transfer energy for the dissociation of
                methane from hydrate. Resulting methane is used for power
                generation, with emissions converted to fertilizers for
                afforestation, and surplus reinjected underground. The process
                will be self-sustaining using biofuels when forestation is
                initiated. It is globally applicable due to presence of hydrates
                near population centers and decentralized community operated
                projects are visualized
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItemstems: "center",
                }}
              >
                <button className="button-1">LEARN MORE</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Banner1;
