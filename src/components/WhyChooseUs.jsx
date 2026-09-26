import { Container, Row, Col } from "react-bootstrap";
import WCSIcon1 from "../assets/Why_choose-us/WCS1.svg?react"
import WCSIcon2 from "../assets/Why_choose-us/WCS2.svg?react"
import WCSIcon3 from "../assets/Why_choose-us/WCS3.svg?react"
import WCSIcon4 from "../assets/Why_choose-us/WCS4.svg?react"
import Client_Logo_Illustration from "../assets/Why_choose-us/client-logo-illustration.svg?react"
import "../styles/WCU.css";

export default function WhyChooseUs() {
  return (
    <section className="mb-0 mb-md-5">
      <Container className="pb-5">
        <div className="d-flex flex-column align-items-center mb-2 mb-md-4">
       <h2 className="subtitle-dark fs-1 text-center">WHY CHOOSE US</h2>
       <p className="text-dark-gray text-center">We deliver dependable industrial tool solutions backed by experience,
        quality, and customer-focused service – helping your business work smarter and more efficiently. </p>
        </div>

        <Row>
          <Col lg={6}>
          <Row>
            <Col xs={6} md={6}>
            <div className="d-flex flex-row justify-content-center justify-content-md-start">
            <div className="d-inline-flex flex-column align-items-center WCU-column ">
              <WCSIcon1 className="mb-1 mb-md-3 w-50"/>
              <h4 className="subtitle-dark fw-bold text-center WCU-head">Practical Industry Insight</h4>
              <p className="text-dark-gray text-center WCU-body-text">Guided by hands-on experience to match with working conditions.</p>
            </div>
            </div>
            </Col>
             <Col xs={6} md={6}>
            <div className="d-flex flex-row justify-content-center justify-content-md-start">
            <div className="d-inline-flex flex-column align-items-center WCU-column ">
              <WCSIcon2 className="mb-1 mb-md-3 w-50"/>
              <h4 className="subtitle-dark fw-bold text-center WCU-head">Tools Perform Under Pressure</h4>
              <p className="text-dark-gray text-center WCU-body-text">Durable tools designed for consistent performance in demanding environments.</p>
            </div>
            </div>
            </Col>
             <Col xs={6} md={6}>
            <div className="d-flex flex-row justify-content-center justify-content-md-start">
            <div className="d-inline-flex flex-column align-items-center WCU-column ">
              <WCSIcon3 className="mb-1 mb-md-3 w-50"/>
              <h4 className="subtitle-dark fw-bold text-center WCU-head" >Focused on Business</h4>
              <p className="text-dark-gray text-center WCU-body-text">Helping businesses work faster, safer, and more efficiently.</p>
            </div>
            </div>
            </Col>
             <Col xs={6} md={6}>
            <div className="d-flex flex-row justify-content-center justify-content-md-start">
            <div className="d-inline-flex flex-column align-items-center WCU-column ">
              <WCSIcon4 className="mb-1 mb-md-3 w-50"/>
              <h4 className="subtitle-dark fw-bold text-center WCU-head"> Reliable Partnership</h4>
              <p className="text-dark-gray text-center WCU-body-text">Building long-term relationships through trust and service.</p>
            </div>
            </div>
            </Col>
          </Row>
          </Col>

          <Col lg={6} className="mt-4 mt-md-0">
          <Client_Logo_Illustration className="w-100 h-100" />
          </Col>
        </Row>

      </Container>
    </section>
  );
}
