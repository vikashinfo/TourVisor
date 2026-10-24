import { Container, Row, Col } from "react-bootstrap";

const Card = [
  {
    number: "500",
    title: "Flight Booking",
    icon: <i class="fa-brands fa-avianex"></i>,
  },
  {
    number: "250",
    title: "Cruises Booking",
    icon: <i class="fa-solid fa-ship"></i>,
  },
  {
    number: "750",
    title: "Amazing Tour",
    icon: <i class="fa-solid fa-house"></i>,
  },
  {
    number: "150",
    title: "Hotel Booking",
    icon: <i class="fa-solid fa-calendar-days"></i>,
  },
];

function BookingCard() {
  return (
    <section
      className="position-relative text-white py-5 "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,35,75,.72), rgba(0,75,120,.78)), url(https://media.istockphoto.com/id/1389823303/photo/interior-of-modern-loft-style-restaurant-bar-counter-interior-porch-with-fresh-flowers.jpg?s=612x612&w=0&k=20&c=8GTkUTgMvtdaRKzo2JRadT0RIOHZR6TfdjJ8oQOWGUo=)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="py-3">
        <Row className="g-4 text-center justify-content-center">
          {Card.map((item, index) => (
            <Col xs={6} md={3} key={index}>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle border border-3 border-white border-opacity-25 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="fw-bold mb-2">{item.number}</h3>
                <span className="fw-semibold mb-0">{item.title}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BookingCard;
