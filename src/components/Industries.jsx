import { Container, Row, Col } from "react-bootstrap";
import Automobile from "../assets/Industries/Automobile.svg?react"
import Manufacture from "../assets/Industries/manufacturing.svg?react"
import Construction from "../assets/Industries/construction.svg?react"
import ArrowBtnBlack from "../assets/Industries/Industries_arrow_black.svg?react"
import ArrowBtnGreen from "../assets/Industries/Industries_arrow_green.svg?react"
import "../styles/industries.css"

export default function Industries() {
  return (
    <section className="section-padding" id="industries">
      <Container className="pb-0 pb-md-5 border-bottom">
        <div className="d-flex flex-column align-items-center">
        <p className="text-blue text-center">INDUSTRIES</p>
       <h2 className="subtitle-dark fs-1 text-center">Industries We Serve</h2>
       <p className="text-dark-gray text-center">We support a wide range of industries by supplying reliable industrial
        tools and equipment designed to meet diverse operational requirements. </p>
        </div>

        <Row className="mt-3 mt-md-5">
            <Col md={4} className="px-4 pb-5">
              <div className="position-relative">
                <Automobile className=" w-100 h-100" />
                <div className="position-absolute top-0 mt-4">
                  <h3 className="text-blue w-100 text-center">Automotive Industry</h3>
                  <p className="px-5 text-center industries-body-text">High-quality tools designed for maintenance and repair in automotive workshops and facilities.</p>
                </div>
              <div className="arrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                <ArrowBtnBlack className="arrow-icon black" />
                <ArrowBtnGreen className="arrow-icon green" />
              </div>
              </div>
            </Col>
             <Col md={4} className="px-4 pb-5">
              <div className="position-relative">
              <Manufacture className=" w-100 h-100" />
              <div className="position-absolute top-0 mt-4">
                <h3 className="text-blue w-100 text-center">Manufacturing Industry</h3>
                <p className="px-5 text-center industries-body-text">Reliable tools that support efficient production, precision work, and consistent operational performance.</p>
              </div>
              <div className="arrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                <ArrowBtnBlack className="arrow-icon black" />
                <ArrowBtnGreen className="arrow-icon green" />
              </div>
              </div>
            </Col>
             <Col md={4} className="px-4 pb-5">
              <div className="position-relative">
              <Construction className=" w-100 h-100" />
              <div className="position-absolute top-0 mt-4">
                <h3 className="text-blue w-100 text-center">Construction Industry</h3>
                <p className="px-5 text-center industries-body-text">Durable tools built to handle demanding site conditions and support safe, efficient construction work.</p>
              </div>
              <div className="arrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                <ArrowBtnBlack className="arrow-icon black" />
                <ArrowBtnGreen className="arrow-icon green" />
              </div>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}
