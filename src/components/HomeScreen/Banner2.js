import React from "react";
import "../../css/Banner2.css";
import { Row, Col } from "react-bootstrap";

const Banner2 = () => {
  return (
    <Row className="banner-container">
      <Col xs={12} lg={6} className="banner-left">
        <div className="content-left">
          <h1>OFFSHORE RIG</h1>
          <h1>CAPTURE</h1>
          <p>
            Eliminates the need for routine flaring and increases production of
            the upstream operation.
          </p>
        </div>
      </Col>
      <Col xs={12} lg={6} className="banner-right">
        <div className="content-right">
          <h1>OFFSHORE REFINERY</h1>
          <h1>CAPTURE</h1>
          <p>
            Scalable to integrate into the oil refinery flare stack systems to
            reduce GHG emissions while increasing revenues.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Banner2;
