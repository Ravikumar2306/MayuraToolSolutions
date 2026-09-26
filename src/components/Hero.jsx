import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero-image.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Hero() {
const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const el = document.getElementById(location.state.scrollTo);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return (
    <section className="mb-md-5 pb-5 pt-4" id="home">
      <Container>
        <Row className="align-items-between">
          <Col className="d-flex flex-column justify-content-between order-2 order-md-1" lg={6}>
            <h1 className="section-title mt-3 display-2">
              The Smart Tools<br />for the Modern<br />Workforce
            </h1>
          
          <div>
            <p className="text-dark-gray mb-4 body-text">
              Supplying high-quality industrial tools, equipment, and solutions to power your business efficiently, safely, and with confidence.
            </p>
            <NavLink to="/mainProducts" className="dark-bg text-white py-3 px-5 rounded-pill hero-button">
              Get Started
            </NavLink>
          </div>
          </Col>

          <Col lg={6} className="text-center order-1 order-md-2">
            {/* Hero Image Placeholder */}
            <div>
                <img
    src={heroImage}
    alt="Hero"
    className="img-fluid"
  />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
