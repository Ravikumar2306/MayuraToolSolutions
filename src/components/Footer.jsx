import { Container, Row, Col, Navbar, Nav, } from "react-bootstrap";
import FooterLogo from "../assets/footer-logo.svg?react"
import InstagramIcon from "../assets/Social_Media/insta-Icon.svg?react"
import FacebookIcon from "../assets/Social_Media/facebook-Icon.svg?react"
import TelegramIcon from "../assets/Social_Media/telegram-Icon.svg?react"

export default function Footer() {
  return (
    <section style={{padding: "80px 0 0 0"}}>
      <Container>
        <div className="mb-3">
        <Row>
          <Col lg={4} className="d-inline-flex flex-column align-items-center align-items-md-start justify-content-center" >
              <div className="d-inline-flex flex-column align-items-center align-items-md-start">
              <FooterLogo className="w-75 flex-column mb-4" />
              <div className="w-75 d-flex flex-row justify-content-center">
                <InstagramIcon />
                <FacebookIcon className="mx-3" />
                <TelegramIcon />
              </div>  
              </div>       
          </Col>

          <Col lg={8} className="mt-3 mt-md-0">
          <Row>
            <Col xs={6} lg={3} className="d-flex flex-row justify-content-center order-1 order-md-1" >
          <Navbar>
          <Navbar.Toggle />
          <Nav className="d-flex flex-column align-items-center align-items-md-start">
            <p className="fw-bold ps-2" style={{color:"black"}}>Company</p>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Industries</Nav.Link>
            <Nav.Link>Why Choose Us</Nav.Link>
          </Nav>
          </Navbar>
            </Col>
            <Col xs={12} lg={4} className="d-flex flex-row justify-content-center order-2 order-md-1">
          <Navbar>
          <Navbar.Toggle />
          <Nav className="d-flex flex-column align-items-center align-items-md-start">
            <p className="fw-bold ps-2" style={{color:"black"}}>Products</p>
            <Nav.Link>PCD & PCBN Cutting Tools</Nav.Link>
            <Nav.Link>Drills & Endmills</Nav.Link>
            <Nav.Link>Diamond Tooling Accessories</Nav.Link>
            <Nav.Link>Grinding Wheels</Nav.Link>
            <Nav.Link>Other Precision Tools</Nav.Link>
          </Nav>
          </Navbar>
            </Col>
               <Col xs={6} lg={3} className="d-flex flex-row justify-content-center align-items-start order-1 order-md-2">
          <Navbar>
          <Navbar.Toggle />
          <Nav className="d-flex flex-column align-items-center align-items-md-start">
            <p className="fw-bold ps-2" style={{color:"black"}}>Help</p>
            <Nav.Link>Contact Us</Nav.Link>
            <Nav.Link>Customer Help</Nav.Link>
            <Nav.Link>Community</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>
          </Navbar>
            </Col>
          </Row>
          </Col>
        </Row>
        </div>
        <footer className="py-3 text-start text-muted border-top">
         <Navbar>
          <Navbar.Toggle />
          <Nav className="w-100 d-flex flex-column flex-md-row justify-content-md-between">
            <p className="text-light-gray text-center">© Mayura Tool Solutions 2023. All Rights Reserved.</p>
            <div className="d-flex flex-row justify-content-between">
            <Nav.Link className="text-center p-md-0">Privacy Policy</Nav.Link>
            <Nav.Link className="text-center py-md-0 px-md-5">Terms of Conditions</Nav.Link>
            <Nav.Link className="text-center p-md-0">Disclosure</Nav.Link>
            </div>
          </Nav>
          </Navbar>
        </footer>
      </Container>
    
    </section>
  );
}
