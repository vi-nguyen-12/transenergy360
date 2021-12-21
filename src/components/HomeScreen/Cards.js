import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <Card
        className="card"
        style={{
          width: "18rem",
          background: "white",
          width: "400px",
          border: "1px solid lightgrey",
          position: "absolute",
          bottom: "-150%",
          left: "10%",
        }}
      >
        <Card.Img
          variant="top"
          src="images/6th_photo.png"
          className="img-fluid"
          style={{ width: "400px", height: "300px", borderRadius: "0" }}
        />
        <Card.Body
          style={{ height: "250px", padding: "20px", paddingLeft: "60px" }}
        >
          <Card.Text>
            <h1 style={{ fontSize: "29px", fontWeight: "bold" }}>
              NGL CONDENSATE TERMINAL
            </h1>
            <h4 style={{ fontSize: "16px" }}>
              NGL condensates will no longer require transportation to a gas
              processing plant as the gas will be ‘dryed’ at source.
            </h4>
            <button
              style={{
                backgroundColor: "#D5864E",
                color: "white",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "100px",
              }}
            >
              Learn More
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="card"
        style={{
          width: "18rem",
          background: "white",
          width: "400px",
          border: "1px solid lightgrey",
          position: "absolute",
          bottom: "-130%",
          left: "40%",
        }}
      >
        <Card.Img
          variant="top"
          src="images/7th_photo.png"
          className="img-fluid"
          style={{ width: "100%", height: "300px", borderRadius: "0" }}
        />
        <Card.Body
          style={{ height: "250px", padding: "20px", paddingLeft: "60px" }}
        >
          <Card.Text>
            <h1 style={{ fontSize: "29px", fontWeight: "bold" }}>
              NGL CONDENSATE TERMINAL
            </h1>
            <h4 style={{ fontSize: "16px" }}>
              NGL condensates will no longer require transportation to a gas
              processing plant as the gas will be ‘dryed’ at source.
            </h4>
            <button
              style={{
                backgroundColor: "#D5864E",
                color: "white",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "100px",
              }}
            >
              Learn More
            </button>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="card"
        style={{
          width: "18rem",
          background: "white",
          width: "400px",
          border: "1px solid lightgrey",
          position: "absolute",
          bottom: "-130%",
          left: "70%",
          borderRadius: "0",
        }}
      >
        <Card.Img
          variant="top"
          src="images/9th_photo.png"
          className="img-fluid"
          style={{ width: "100%", height: "300px", borderRadius: "0" }}
        />
        <Card.Body
          style={{ height: "250px", padding: "20px", paddingLeft: "60px" }}
        >
          <Card.Text>
            <h1 style={{ fontSize: "29px", fontWeight: "bold" }}>
              NGL CONDENSATE TERMINAL
            </h1>
            <h4 style={{ fontSize: "16px" }}>
              NGL condensates will no longer require transportation to a gas
              processing plant as the gas will be ‘dryed’ at source.
            </h4>
            <button
              style={{
                backgroundColor: "#D5864E",
                color: "white",
                border: "0",
                opacity: "1",
                marginTop: "20px",
                padding: "5px",
                width: "100px",
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
