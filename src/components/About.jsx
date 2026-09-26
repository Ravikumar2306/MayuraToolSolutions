
import { Container, Row, Col } from "react-bootstrap";
import aboutImage1 from "../assets/About/About-1.jpg"
import aboutImage2 from "../assets/About/About-2.png"
import aboutImage3 from "../assets/About/About-3.png"
import GearIcon from "../assets/About/AboutIcon-1.svg?react";
import LeaderIcon from "../assets/About/AboutIcon-2.svg?react";
import HelpIcon from "../assets/About/AboutIcon-3.svg?react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="section-padding dark-bg" id="about">
      <Container>
        <div className="d-flex flex-column align-items-center mb-4">
        <p className="text-green fs-5 text-center">ABOUT US</p>
       <h2 className="subtitle-white fs-1 text-center">Experience You Can Trust</h2>
       <p className="text-light-gray text-center">Mayura Tool Solutions is a trusted supplier of industrial tools an
        equipment, delivering reliable and cost-effective solutions to various industries. </p>
        </div>
        
        <Row>
          <Col lg={4}>
          <Row className="h-100 flex-column m-0">
          <Col className="h-50 d-flex align-items-start justify-content-center p-0">
            <img src={aboutImage1} alt="Quality-checking-image" className="img-fluid h-100 rounded-5"/>
          </Col>
          <Col className="h-50 d-flex flex-column align-items-center justify-content-end text-center my-5 my-md-3 p-0">
            <GearIcon className="mb-3" style={{ fill: "#b8c0d6", width: "70px" }} />
            <h4 className="subtitle-white">Quality-Assured<br /> Products</h4>
            <p className="text-light-gray fs-6 about p-0 m-0">Durable, reliable tools built for industrial performance.</p>
          </Col>
          </Row>
          </Col>
           <Col lg={4}>
            <Row className="h-100 flex-column m-0">
            <Col className="h-50 d-flex flex-column align-items-center justify-content-start text-center order-2 order-lg-0 my-5 my-md-3 p-0">
              <LeaderIcon className="mb-3" style={{ fill: "#b8c0d6", width: "70px" }} />
              <h4 className="subtitle-white">Industry-Experienced<br /> Leadership</h4>
              <p className="text-light-gray fs-6 about p-0 m-0">Expert guidance backed by years of industry knowledge.</p>
            </Col>
           <Col className="h-50 d-flex align-items-center justify-content-center p-0">
            <img src={aboutImage2} alt="Worker-image" className="img-fluid h-100 rounded-5 order-0 order-md-2"/>
            </Col>
            </Row>
          </Col>
             <Col lg={4}>
             <Row className="h-100 flex-column m-0">
          <Col className="h-50 d-flex align-items-start justify-content-center p-0">
            <img src={aboutImage3} alt="Help-image" className="img-fluid h-100 rounded-5"/>
          </Col>
          <Col className="h-50 d-flex flex-column align-items-center justify-content-end text-center my-5 my-md-3 p-0">
            <HelpIcon className="mb-3" style={{ fill: "#b8c0d6", width: "70px" }} />
            <h4 className="subtitle-white">Customer-Focused<br /> Service</h4>
            <p className="text-light-gray fs-6 about p-0 m-0">Responsive support and dependable service you can trust.</p>
          </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
