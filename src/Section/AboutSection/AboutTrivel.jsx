import { Container, Row, Col, Button } from "react-bootstrap";

const ABOUtravelCard = () => {
  const featurs = [
    "Professional Tour Guide",
    "Quality you can trust",
    "Exceptional flexibility",
    "Award-winning support",
    "Blandit sit amet non magna",
  ];

  return (
    <Container fluid className="p-0 ">
      <div style={{ height: "100px" }} />

      <div className="bg-light " />

      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Left Content */}
          <Col xs={12} lg={6} className="d-flex align-items-center  bg-white">
            <Container className="px-5 px-md-5 py-5">
              <div className="mx-auto" style={{ maxWidth: "390px" }}>
                <p
                  className="text-uppercase mb-2"
                  style={{
                    color: "#f00000",
                    fontFamily: "cursive",
                    fontStyle: "italic",
                  }}
                >
                  WHY CHOOSE US
                </p>

                <h2 className="fw-bold fs-3 mb-2">
                  <span>Discover Our Travel Guideline</span>
                </h2>

                <p className="text-secondary small lh-lg mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>

                <Row className="g-3 mb-4">
                  {featurs.map((feature, index) => (
                    <Col xs={12} sm={6} key={index}>
                      <div className="d-flex align-items-start gap-2 small">
                        <span className="text-danger">✓</span>
                        <span className="text-dark">{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>

                <Button variant="primary" className="px-4 py-2 rounded-1">
                  Contact Us
                </Button>
              </div>
            </Container>
          </Col>

          {/* Right Image Offer */}
          <Col xs={12} lg={6}>
            <div
              className="position-relative d-flex align-items-center justify-content-center text-center text-white "
              style={{
                minHeight: "500px",
                backgroundImage:
                  "linear-gradient( rgba(4, 22, 48, 0.3)), url('https://html.tonatheme.com/2025/tourvisor/assets/images/resource/destination-6.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 w-100">
                <h3
                  className="mb-4"
                  style={{ fontFamily: "cursive", fontStyle: "italic" }}
                >
                  discover
                </h3>

                <p className="small fw-semibold">
                  It's Limited Seating! Hurry Up
                </p>

                <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                  <span
                    className="fw-bold display-2"
                    style={{ color: "coral", lineHeight: 1 }}
                  >
                    45
                  </span>
                  <span className="fs-4 fw-semibold" style={{ color: "coral" }}>
                    % OFF
                  </span>
                </div>

                <h4 className="fw-bold mb-4">New Experiences in Thailand</h4>

                <div
                  className="mx-auto rounded-pill bg-secondary opacity-50 mb-4"
                  style={{ maxWidth: "275px", height: "12px" }}
                />

                <Button
                  className="border-0 rounded-1 px-4 py-2 fw-semibold"
                  style={{ backgroundColor: "orangered" }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ABOUtravelCard;
