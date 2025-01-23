import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="light">
      <Container fluid>
        <Navbar.Brand href="#" className="brand">
          <b>Notary</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#practice-area" className="nav-item">
              Practice Area
            </Nav.Link>
            <Nav.Link href="#testimonials" className="nav-item">
              Testimonial
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
