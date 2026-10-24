// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Footer Component
const FooterSection = () => {
  return (
    <footer
      style={{ backgroundColor: "#031c35", color: "#fff", padding: "20px 0" }}
    >
      <Container style={{ flexWrap: "wrap-reverse", textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2>
            TOUR <span className="text-danger">VISOR</span>
          </h2>
          <span className="d-flex justify-content-center gap-3">
            fllow US:
            <p>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>

              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </p>
          </span>
        </div>
        <hr style={{ backgroundColor: "#fff" }} />

        <Row>
          {/* Address Section */}
          <Col md={3} sm={12}>
            <h5 className="fs-3 text-danger">Address</h5>

            <p> 4140 Parker Rd.Chhapratown</p>
            <span>Bihar chhapra 841301</span>
            <p>Toll Free Customer Care</p>
            <h6>(91+)9060170120</h6>
          </Col>

          {/* Our Services Section */}
          <Col md={3} sm={12}>
            <h5 className="fs-3 text-danger">Top Destinations</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Las Vegas</li>
              <li>Patna city</li>
              <li>Sen Chhapra </li>
              <li>New Hawali</li>
            </ul>
          </Col>

          {/* Other Services Section */}
          <Col md={3} sm={12}>
            <h5 className="fs-3 text-danger">Support</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Customer Support</li>
              <li>Privacy & police</li>
              <li>Contact Channels</li>
              <li>Working With Our Family</li>
            </ul>
          </Col>

          {/*sdfsfagd55555 */}
          <Col md={3} sm={12}>
            <h5 className="fs-3 text-danger">Other Services</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Car hire</li>
              <li>Tour List</li>
              <li>Cruise Ticket</li>
              <li>Holiday Rental</li>
            </ul>
          </Col>
        </Row>

        <hr style={{ backgroundColor: "#fff" }} />

        <Row>
          <Col className="text-center">
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} Your infoVikas All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;
