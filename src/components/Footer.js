import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <Card className="card-footer">
        <Container>
          <Row>
            <Col xs={12} lg={3}>
              <h5 className="footer-title">Company</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Our Blog</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Report Issues</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Help Center</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Careers</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">News.</a>
                </li>
              </ul>
            </Col>

            <Col xs={12} lg={3}>
              <h5 className="footer-title">About Us</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">The Team</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Clients</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Portfolio</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Designers</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </Col>

            {/* <Col xs={12} lg={3}>
                <h5 className="footer-title">Design</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Graphic Design</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Illustrations</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Web Design</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Editional Design</a>
                  </li>
                </ul>
              </Col> */}

            <Col xs={12} lg={3}>
              <h5 className="footer-title">Contact</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Campaigns</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Marketing BTL</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Digital Marketing</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Editional Design</a>
                </li>
              </ul>
            </Col>

            {/* <Col xs={12} lg={2}>
                <h5 className="footer-title">Our Team</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">About us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Our Website</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">NY Office</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">London Office</a>
                  </li>
                </ul>
              </Col> */}
          </Row>
        </Container>
        <Container className="footer-copyright-wrapper">
          {/* <div className="footer-copyright-left">
              <img src="./images/logo-footer.png" />
              <div style={{ color: "#727176 " }}>
                Copyright 2021 - 2025 LCT360, LLC. Allrights Reserved.
                <p>
                  lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi
                </p>
              </div>
            </div> */}
          <div className="footer-copyright-right">
            <div className="icons-group">
              <div className="icon">
                <img src="./images/facebook-24.png" />
              </div>
              <div className="icon">
                <img src="./images/twitter-24.png" />
              </div>
              <div className="icon">
                <img src="./images/instagram-24.png" />
              </div>
            </div>

            {/* <div className="row-7">
                <p className="footer-title">
                  <a href="#!">Offices</a>
                </p>
                <p className="footer-title">
                  <a href="#!">About Us</a>
                </p>
                <p className="footer-title">
                  <a href="#!">Marketing & Campaigns</a>
                </p>
                <p className="footer-title">
                  <a href="#!">Help Center</a>
                </p>
              </div> */}
          </div>
        </Container>
      </Card>
    </div>
  );
};

export default Footer;
