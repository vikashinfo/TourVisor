import "bootstrap/dist/css/bootstrap.min.css";
import "./Destins.css";

import { Card, Row, Col, Button } from "react-bootstrap";

function DiseonCard() {
  return (
    <Card className="my-3 px-3 shadow">
      <Row className="g-3 justify-content-center">
        {/* Left side image column (larger) */}
        <Col md={4} sm={6} xs={10}>
          <div className="image-container position-relative overflow-hidden rounded">
            <Card.Img
              src="https://cdn.pixabay.com/photo/2026/02/24/04/16/ahmetyuksek-couple-on-bench-10140688_1280.jpg"
              alt="Destination"
              className="hover-zoom w-100 object-fit-cover"
            />

            {/* Image Overlay */}
            <div className="position-absolute top-0 p-5">
              <h3 className="text-white fw-bold">Activities for your trip</h3>

              <Button variant="light" className="align-self-start">
                Experinces
              </Button>
            </div>
          </div>
        </Col>

        {/* Right side text column */}
        <Col md={4} sm={6} xs={10}>
          <div className="image-container position-relative overflow-hidden rounded">
            <Card.Img
              src="https://cdn.pixabay.com/photo/2019/09/28/08/58/mountain-bike-4510246_1280.jpg"
              alt="Dscddf"
              className="hover-zoom w-100 object-fit-cover"
            />

            {/* Image Overlay */}
            <div className="position-absolute top-0 p-5">
              <span className="fw-semibold text-light">Enjoy Summer Deals</span>
              <h3 className="text-white fs-3 fw-bold">Up to 80% Discount!</h3>

              <Button variant="outline-light" className="px-3 fw-semibold">
                Discover
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default DiseonCard;
