import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="bg-light"
      // style={{ maxWidth: "1400px", margin: "10px auto" }}
    >
      <Container className="gap-3 fs-5 fw-semibold">
        <Navbar.Brand href="#" className="fs-2 fw-bold ">
          <span className="text-danger ">TOUR</span>VISOR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About US</Nav.Link>

            <Nav.Link href="/pagese">Pages</Nav.Link>
            <Nav.Link href="/destinatons">Dastinations</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex gap-3  ">
            <Button variant="outline-success" className="p-3  fw-semibold">
              Become An Expert
            </Button>
            <Button type="submit" className=" fw-semibold bg-danger border-0">
              Sing In / Sign up
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
