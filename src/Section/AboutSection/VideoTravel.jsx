import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function VideoTravel() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient( rgba(13, 20, 29, 0.55)), url('https://html.tonatheme.com/2025/tourvisor/assets/images/resource/destination-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

        minHeight: "350px",
        padding: "30px 15px",
      }}
    >
      <Container>
        <p className="mb-3" style={{ fontFamily: "cursive", fontSize: "25px" }}>
          Our Video
        </p>

        <h1
          className="fw-bold mb-5"
          style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
        >
          Travel Tips And Advice
        </h1>

        <Button
          href="https://youtu.be/FF5xSgnPjuY"
          target="_blank"
          rel="noreferrer"
          aria-label="Play travel video"
          className="rounded-circle d-inline-flex align-items-center justify-content-center border-0 shadow"
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#ff5a1f",
          }}
        >
          <i style={{ fontSize: "3rem" }} class="fa-solid fa-circle-play"></i>
        </Button>
      </Container>
    </section>
  );
}

export default VideoTravel;
