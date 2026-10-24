import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Destins.css";

const places = [
  {
    title: "Town Piran Slovenia",
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/destination-4.jpg",
    text: "14 Hotel - 22 Cars - 18 Tours - 95 Activity",
  },
  {
    title: "Pramids in Egypt",
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/destination-5.jpg",
    text: "14 Hotel - 22 Cars - 18 Tours - 95 Activity",
  },
  {
    title: "Phi phi Island Thailand",
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/destination-6.jpg",
    text: "14 Hotel - 22 Cars - 18 Tours - 95 Activity",
  },

  {
    title: "Kuala Lumpur",
    img: "https://html.tonatheme.com/2025/tourvisor/assets/images/resource/destination-3.jpg",
    text: "14 Hotel - 22 Cars - 18 Tours - 95 Activity",
  },
];

function DestinationsCard() {
  return (
    <>
      <Container className="py-4 destination-section">
        <div className="text-center mb-4">
          <p className="text-danger fst-italic mb-1">Top Destinations</p>
          <h2 className="fw-bold text-primary">Explore Popular Destinations</h2>
          <p className="text-secondary  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>

        {/* //////// */}
        <Row className="g-4 justify-content-center">
          {places.map((place, index) => (
            <Col key={index} xs={10} sm={6} lg={3}>
              <Card className="place-card border-0">
                <Card.Img src={place.img} alt="casrd" />

                <div className="place-overlay ">
                  <div className="place-content text-center">
                    <p>{place.text}</p>
                    <h4>{place.title}</h4>

                    <Button variant="outline-primary">Discover</Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default DestinationsCard;
