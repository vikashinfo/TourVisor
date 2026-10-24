import { Carousel, Card, Button, Container } from "react-bootstrap";
import DestinationScren from "../../Screen/DestinosScren/DestinosScren";
import PagesSection from "../Pages/PagesSection";

function HerroSection() {
  const slides = [
    {
      img: "https://cdn.pixabay.com/photo/2021/08/02/20/54/nature-6517866_1280.jpg",
      haeding: "explare the world",
      title: "Find the next destination",
      text: "Lorem ipsume dolor sit amet,comsecletur adiposcing elit, sed do eiusmod tempor insididunt ut labore",
    },
    {
      img: "https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?s=612x612&w=0&k=20&c=G432lmdUz9qrW6D4sZYxLe6K-Km85OEmZg0qpcGyRCI=",
      haeding: "explare the world",
      title: "Find the next trip ",
      text: "Lorem ipsume dolor sit amet,comsecletur adiposcing elit, sed do eiusmod tempor insididunt ut labore",
    },
    {
      img: "https://media.istockphoto.com/id/472909442/photo/backwaters-of-kerala.jpg?s=612x612&w=0&k=20&c=ibwRiZJZGcxG5MLWFUowcXM9XK3nZnklk9ZH1Qus3C4=",
      haeding: "explare the world",
      title: "Find the next destination",
      text: "Lorem ipsume dolor sit amet,comsecletur adiposcing  elit, sed do eiusmod tempor insididunt ut labore",
    },
  ];

  return (
    <>
      <Container fluid className="p-0">
        <Carousel interval={3000} controls indicators fade>
          {slides.map((slide, idx) => (
            <Carousel.Item key={idx}>
              {/* Background image */}
              <div
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "90vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Card overlay */}
                <Card
                  style={{
                    maxWidth: "600px",
                    color: "#0c0b0b",
                    backgroundColor: "rgba(255,255,255, 0.3)",
                  }}
                  className="text-center p-3"
                >
                  <span className="fst-italic mb-3"> {slide.haeding}</span>
                  <Card.Title className="fs-1 fw-semibold">
                    {slide.title}
                  </Card.Title>
                  <Card.Text className=" fst-italicfs-5  fw-semibold text-body">
                    {slide.text}
                  </Card.Text>
                  <Card.Title className="w-100">
                    <Button className="btn btn-danger px-4 py-2">
                      Take Me There
                    </Button>
                  </Card.Title>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/*  ***************** Booking Search Card********* */}
        <div className="container position-relative">
          <div
            className="row bg-white rounded-3 shadow mx-auto p-3 p-md-4"
            style={{
              maxWidth: "900px",
              marginTop: "-50px",
              zIndex: 2,
              position: "relative",
            }}
          >
            <div className="col-12 col-md-3 border-end mb-3 mb-md-0">
              <label className="small fw-semibold">Location</label>
              <input
                className="form-control border-0 px-0 shadow-none"
                placeholder="Where are you going?"
              />
            </div>

            <div className="col-6 col-md-2 border-end mb-3 mb-md-0">
              <label className="small fw-semibold">Check in</label>
              <input
                type="date"
                placeholder="Set Date"
                className="form-control border-0 px-0 shadow-none"
              />
            </div>

            <div className="col-6 col-md-2 border-end mb-3 mb-md-0">
              <label className="small fw-semibold">Check Out</label>
              <input
                type="date"
                className="form-control border-0 px-0 shadow-none"
              />
            </div>

            <div className="col-6 col-md-2 border-end mb-3 mb-md-0">
              <label className="small fw-semibold">Activity</label>
              <select className="form-select border-0 px-0 shadow-none">
                <option>Activity</option>
                <option>Adventure</option>
                <option>Beach</option>
                <option>Sightseeing</option>
              </select>
            </div>

            <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
              <button className="btn btn-primary w-75">Search</button>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <DestinationScren />
      </div>
      <div>
        <PagesSection />
      </div>
    </>
  );
}

export default HerroSection;
