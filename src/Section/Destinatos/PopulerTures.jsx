import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const tours = [
  {
    title: "Arashiyama In Autumn Season",
    location: "Tokyo, Japan",
    days: "3 days",
    rating: "4.5",
    price: "$150.00",
    oldPrice: "$250.00",
    discount: "40% Off",
    images: [
      "https://media.istockphoto.com/id/589538028/photo/manali-town.jpg?s=612x612&w=0&k=20&c=ACZt8Wm-_Y_EeqxXjSbX8b-6ig4v_KD3f-leEetCuGY=",
      "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?s=612x612&w=0&k=20&c=LbpIHRo7kGT7dbUr6b6UuD1d6P0yCaKZ2lbqo3TY988=",
      "https://media.istockphoto.com/id/1453007793/photo/a-man-riding-a-scooter-in-the-colorful-streets-inside-jaisalmer-fort.jpg?s=612x612&w=0&k=20&c=atRBnsUPaBgApcMTlbcIxmyu2gtqJRGqHtEU96axFoM=",
      "https://media.istockphoto.com/id/1164134267/photo/stokksnes-cape-in-iceland.jpg?s=612x612&w=0&k=20&c=-SEGaVntwBnK8VJGZ7KjhmLOY7o_usYWY5CB7I5H6os=",
    ],
  },
  {
    title: "Aerial View Of James Bond Island",
    location: "Phuket Thailand",
    days: "7 days",
    rating: "5.0",
    price: "$500.00",
    oldPrice: "$750.00",
    discount: "20% Off",
    images: [
      "https://media.istockphoto.com/id/1090614334/photo/beautiful-cloudscape-over-the-sea-waves-sunrise-shot.jpg?s=612x612&w=0&k=20&c=WZML2xjbPokY-oIjO4PHmJLC5Vn331B-VGyB4WUF7Uo=",
      "https://media.istockphoto.com/id/1913677406/photo/happy-indian-family-of-three-enjoying-summer-vacation-on-tropical-beach-father-and-mother.jpg?s=612x612&w=0&k=20&c=NxDIXkEBgV6V-o8wYWvhUpA2jTdvQqBxVa3y8H-T6KQ=",
      "https://media.istockphoto.com/id/2267780555/photo/golden-light-on-calm-bay-and-palm-trees-kerala.jpg?s=612x612&w=0&k=20&c=xCTH6pa9brNrN_anY1O53Vo1SBO6zE2wmL2ggWIPpgw=",
      "https://media.istockphoto.com/id/992856010/photo/woman-takes-sunbath-on-tropical-beach-island-paradise.jpg?s=612x612&w=0&k=20&c=hBheZAFoZ3iSakpEEpomsovANkzuy1aAtCaFI42ZS-M=",
    ],
  },
  {
    title: "Lake And The Mountains Under Sky",
    location: "Senja Island Norway",
    days: "15 days",
    rating: "4.5",
    price: "$1050.00",
    oldPrice: "$1500.00",
    discount: "40% Off",
    images: [
      "https://media.istockphoto.com/id/507204606/photo/woman-lifts-her-arms-in-victory-mount-everest-national-park.jpg?s=612x612&w=0&k=20&c=PIj5lPrDIUbsvtJYknFTNpbcsM7z-Qb2LEVHskgB8J8=",
      "https://media.istockphoto.com/id/2250478288/photo/group-of-tourists-trekking-through-pine-forest-trail-in-uttarakhand-india.jpg?s=612x612&w=0&k=20&c=d4-ZrqLLcJeJlgjxT-HgDtSF3BwhINUsouI7665XEqU=",
      "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=",
      "https://media.istockphoto.com/id/1214437047/photo/punakha-dzong-bhutan-magnificent-view-of-punakha-dzong-fortress-known-as-the-queen-of-dzongs.jpg?s=612x612&w=0&k=20&c=ukDVJzjYnlVYYrE6H-aDIJSCvizqSp0dsj8RS3lce28=",
    ],
  },
];

function TourCard({ tour }) {
  return (
    <Card className="h-100 border rounded-1 p-2 shadow-sm">
      <Row className="g-2">
        <Col xs={9} className="position-relative">
          <Card.Img src={tour.images[0]} className="tour-main-img" />
          <Badge className="discount-badge">{tour.discount}</Badge>
          <Button className="heart-btn" variant="light"></Button>
        </Col>

        <Col xs={3} className="d-flex flex-column gap-2">
          {tour.images.slice(1).map((img, i) => (
            <Card.Img key={i} src={img} className="tour-small-img" />
          ))}
        </Col>
      </Row>

      <div className="d-flex align-items-center gap-2 mt-3 small">
        <span>{tour.days}</span>
        <span>{tour.rating}</span>
      </div>

      <Card.Body className="p-0 pt-2">
        <Card.Title className="tour-title">{tour.title}</Card.Title>

        <p className="text-orange small mb-3">{tour.location}</p>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="text-nowrap">
            <strong>{tour.price}</strong>
            <del className="text-secondary small">{tour.oldPrice}</del>
          </div>

          <Button className="explore-btn">Explore</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function PopularTours() {
  return (
    <section className="tours-section py-5">
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <p className="text-orange fst-italic mb-1">Explore our Tours</p>
            <h2 className="fw-bold">Most Popular Tours</h2>
            <p className="text-secondary small mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </Col>

          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Button variant="outline-dark" className="px-4 py-2">
              View All Destinations
            </Button>
          </Col>
        </Row>

        <Row className="g-3">
          {tours.map((tour, i) => (
            <Col key={i} xs={12} sm={6} lg={4}>
              <TourCard tour={tour} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PopularTours;
