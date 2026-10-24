import { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const testimonials = [
  {
    name: "Alex Hels",
    role: "Web Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Smith",
    role: "Developer",
    text: "Great service and professional team. The experience was amazing and I would definitely recommend them to everyone.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sarah Wilson",
    role: "Marketing Expert",
    text: "Excellent support, friendly people and outstanding results. I am very happy with the quality of their work.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const people = [
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/women/32.jpg",
];

function TestimonialsAbout() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-4">
          <div
            className="fst-italic mb-2"
            style={{ color: "#ff7043", fontFamily: "cursive" }}
          >
            <span> Testimonials</span>
          </div>

          <h3 className="fw-bold text-primary fs-1">
            What Our Happy Clients Say
          </h3>

          <p className="text-secondary small mx-auto" style={{ maxWidth: 450 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>

        <Row className="justify-content-center align-items-center">
          {/* Left profiles */}
          <Col
            xs={2}
            className="d-none d-md-flex flex-column align-items-center gap-4"
          >
            <Image
              src={people[0]}
              roundedCircle
              width={80}
              height={80}
              className="border border-3 border-white shadow-sm"
            />
            <Image
              src={people[1]}
              roundedCircle
              width={68}
              height={68}
              className="border border-3 border-white shadow-sm"
            />
            <Image
              src={people[3]}
              roundedCircle
              width={80}
              height={80}
              className="border border-3 border-white shadow-sm"
            />
          </Col>

          {/* Main testimonial */}
          <Col xs={12} md={8} lg={6}>
            <Card className="border-0 shadow-lg rounded-3">
              <Card.Body className="p-4 p-md-5 position-relative">
                <p className="text-secondary small lh-lg mb-4">{item.text}</p>

                <Row className="align-items-center">
                  <Col xs="auto">
                    <Image
                      src={item.img}
                      roundedCircle
                      width={60}
                      height={60}
                      className="border border-3"
                    />
                  </Col>

                  <Col>
                    <h6 className="fw-bold text-primary mb-1">{item.name}</h6>
                    <small style={{ color: "#ff7043" }}>{item.role}</small>
                  </Col>

                  <Col xs="auto">
                    <span
                      className="fw-bold"
                      style={{
                        fontSize: "90px",
                        lineHeight: 1,
                        color: "#fff0ea",
                      }}
                    >
                      ”
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Right profiles */}
          <Col
            xs={2}
            className="d-none d-md-flex flex-column align-items-center gap-4"
          >
            <Image
              src={people[4]}
              roundedCircle
              width={80}
              height={80}
              className="border border-3 border-white shadow-sm"
            />
            <Image
              src={people[2]}
              roundedCircle
              width={68}
              height={68}
              className="border border-3 border-white shadow-sm"
            />
            <Image
              src={people[5]}
              roundedCircle
              width={80}
              height={80}
              className="border border-3 border-white shadow-sm"
            />
          </Col>
        </Row>

        {/* Slider dots */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className="border-0 rounded-circle p-0"
              style={{
                width: 6,
                height: 6,
                backgroundColor: active === index ? "#240a02" : "#adb5bd",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
export default TestimonialsAbout;
