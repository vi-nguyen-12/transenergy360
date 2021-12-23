import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./ListStyle.css";

const Cards = () => {
  return (
    <>
      <Card
        className="card1"
        style={{
          width: "500px",
          borderRadius: "0",
          border: "none",
        }}
      >
        <Card.Img
          variant="top"
          src="images/Mask Group 5.png"
          className="img-fluid"
          style={{ width: "100%", height: "300px", borderRadius: "0" }}
        />
        <Card.Body
          style={{ height: "300px", padding: "20px", paddingLeft: "60px", paddingTop: "8%" }}
        >
          <Card.Text>
            <h1
              style={{
                fontSize: "29px",
                fontWeight: "bolder",
                fontFamily: "proxima nova",
              }}
            >
              USING SOLAR ENERGY CAPTURED BY THE OCEAN USING ARCS
            </h1>
            <h4
              style={{
                fontSize: "16px",
                fontFamily: "proxima nova",
                width: "360px",
              }}
            >
              ARCS provides a means to use solar energy captured by the oceans
              for emission-free power generation.”
            </h4>
            <button
              style={{
                backgroundColor: "#FCC12F",
                color: "black",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "143px",
                height: "40px",
                fontSize: "14px",
                fontFamily: "proxima nova",
              }}
            >
              Learn More
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="card2"
        style={{
          width: "500px",
          borderRadius: "0",
          border: "none",
        }}
      >
        <Card.Img
          variant="top"
          src="images/Mask Group 26.png"
          className="img-fluid"
          style={{ width: "100%", height: "300px", borderRadius: "0" }}
        />
        <Card.Body
          style={{ height: "300px", padding: "20px", paddingLeft: "60px", paddingTop:"8%" }}
        >
          <Card.Text>
            <h1
              style={{
                fontSize: "29px",
                fontWeight: "bolder",
                fontFamily: "proxima nova",
              }}
            >
              POWER GENERATION ENERGY RECOVERY USING SWERS
            </h1>
            <h4
              style={{
                fontSize: "16px",
                fontFamily: "proxima nova",
                width: "300px",
              }}
            >
              SWERS provides ability to save water and recover waste energy in
              thermal power plants.
            </h4>
            <button
              style={{
                backgroundColor: "#FCC12F",
                color: "black",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "143px",
                height: "40px",
                fontSize: "14px",
                fontFamily: "proxima nova",
              }}
            >
              Learn More
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export { Cards };
