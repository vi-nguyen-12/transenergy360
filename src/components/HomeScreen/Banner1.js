import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../../styles/banner1.css";

const Banner1 = () => {
  return (
    <div style={{ display: "inline-flex" }}>
      <img src="./images/Mask Group 6.png" className="banner1" />

      <Container>
        <Row style={{ display: "flex" }}>
          <Col className="about">
            <h2>SUPERIOR NATURAL PROCESSING OF METHANE HYDRATES</h2>
            <p className="about-1">
              Methane hydrate (also known as gas hydrate) is a clathrate single
              compound (methane) that is nested within a lattice of ice/water,
              It exists naturally and in abundance in deep oceans at high
              pressures and relatively low temperatures, including in the South
              and East Asian oceans. These solid hydrates can be used to provide
              energy by dissociating it to gaseous methane and water by means of
              depressurization, chemical substitution, or energy transfer.
            </p>
            <p className="about-1">
              Resonant Exploration & Production (REP) Technology has developed a
              novel means to produce gaseous methane from globally abundant
              hydrate deposits using selective energy transfer facilitated by
              Electromagnetic Resonance (EMR) or REHM1 technology.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItemstems: "center",
              }}
            >
              <button className="button-1">LEARN MORE</button>

              <button className="button-2">READ WHITEPAPER</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner1;
