import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">      
      <Container className="p-3">
        <h1 className="text-white display-1 fw-medium">
              Looking for Reliable <br/> Industrial Tools?</h1>
        <p className="text-light-gray cta-body-text mb-5">
          Contact us today to get expert guidance and the best industrial solutions for your business.
        </p>
        <NavLink to="/contact" className="px-5 py-3 rounded-pill green-bg CTA-btn" >
              Work With Us
        </NavLink>
      </Container>
    </section>
  );
}