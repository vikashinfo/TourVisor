import { Container, Row, Col, Card } from "react-bootstrap";

const cardData = [
  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-1.jpg",
    title: "History",
    text: "lorem ipsume dolor amet consectetur",
  },
  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-2.jpg",
    title: "Romance",
    text: "lorem ipsume dolor amet consectetur",
  },

  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-3.jpg",
    title: "City Break",
    text: "lorem ipsume dolor amet consectetur",
  },
  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-4.jpg",
    title: "Wellness",
    text: "lorm ipsum dolor amet consectetur",
  },
  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-5.jpg",
    title: "Adventure",
    text: "lorem ipsume dolor amet consectetur",
  },
  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-6.jpg",
    title: "Beach",
    text: "lorem ipsume dolor amet consectetur",
  },
  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-7.jpg",
    title: "Wildlife",
    text: "lorem ipsume dolor amet consectetur",
  },
  {
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/category-8.jpg",
    title: "Foodie",
    text: "lorem ipsume dolor amet consectetur",
  },
];

function PagesSection() {
  return (
    <Container className="my-4">
      <div
        style={{
          textAlign: "center",
          flexWrap: "wrap",
          marginBottom: "1em",
        }}
      >
        <span className="text-danger fst-italic">Browse By Category</span>
        <h3 className="fw-bold fs-2">Find Inspiration For Your Next Trip</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </span>
      </div>

      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} lg={3} className="mb-4">
            <Card className="card-zoom w-100">
              <Row className="g-0 align-items-center">
                {/* Left side image */}
                <Col xs={5}>
                  <Card.Img
                    variant="left"
                    src={card.img}
                    alt={card.title}
                    className="imag-card img-fluid m-2"
                  />
                </Col>

                {/* Right side text */}
                <Col xs={7}>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text style={{ color: "#9e9595" }}>
                      {card.text}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default PagesSection;
