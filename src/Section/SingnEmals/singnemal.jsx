import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function SingEmail() {
  const customers = [
    "https://i.pravatar.cc/60?img=47",
    "https://i.pravatar.cc/60?img=12",
    "https://i.pravatar.cc/60?img=11",
    "https://i.pravatar.cc/60?img=68",
    "https://i.pravatar.cc/60?img=44",
  ];

  return (
    <Container fluid className="bg-white py-5 px-4">
      <Container fluid className="px-lg-4">
        <Row className="align-items-center gy-5">
          {/* Customer Support */}
          <Col xs={12} lg={6}>
            <h2 className="fw-bold text-dark mb-3">24/7 Customer Support</h2>

            <p className="text-secondary mb-4">
              Contact us now to have all of your tour-related question answered.
            </p>

            <Row className="align-items-center g-3">
              <Col xs={7} sm={6}>
                <div className="d-flex align-items-center">
                  {customers.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="cdga"
                      className="rounded-circle border border-2 border-white"
                      width="48"
                      height="48"
                      style={{ marginLeft: index === 0 ? 0 : "-10px" }}
                    />
                  ))}
                </div>
              </Col>

              {/* <Col xs={5} sm={6}> */}
              <Button variant="primary" className="fw-semibold  w-50">
                Chat Now
              </Button>
            </Row>
          </Col>

          {/* Newsletter */}
          <Col xs={12} lg={6}>
            <h2 className="fw-bold text-dark mb-3">
              Sign Up for Our Newsletter
            </h2>

            <p className="text-secondary mb-4">
              Save up to 50% on tours and trips. Get instant access to lower
              prices.
            </p>

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <div className="d-flex align-items-center border-bottom border-secondary-subtle pb-3">
                <Form.Control
                  type="email"
                  placeholder="Submit Your Email"
                  aria-label="Your email address"
                  required
                  className="border-0 shadow-none bg-transparent"
                />

                <Button
                  type="submit"
                  variant="link"
                  className="text-danger "
                  aria-label="Subscribe"
                >
                  <i class="fa-solid fa-paper-plane"></i>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SingEmail;
