import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/products_main.css"
import ArrowBtnBlack from "../assets/products/ArrowBtn_black.svg?react"
import ArrowBtnGreen from "../assets/products/ArrowBtn_green.svg?react"
import MainProduct1 from "../assets/products/Main_product_1.svg?react"
import MainProduct2 from "../assets/products/Main_product_2.svg?react"
import MainProduct3 from "../assets/products/Main_product_3.svg?react"
import MainProduct4 from "../assets/products/Main_product_4.svg?react"
import MainProduct5 from "../assets/products/Main_product_5.svg?react"

export default function ProductsMain() {
  const navigate = useNavigate();
  return (
    <section className="">
        <section className="products-banner d-flex flex-column align-items-center justify-content-md-center">
             <Container className="p-3">
        <h1 className="text-white display-3 fw-medium text-md-start text-center">
              Precision Tools for <br/> Advanced Manufacturing</h1>
        <p className="body-text-gray text-md-start text-center">
          Our product range is designed to meet the demands of modern manufacturing,
          offering precision, reliability, and consistent performance across advanced
          industrial applications.
        </p>
        </Container>
        </section>
      <Container className="my-5 pb-0 pb-md-2">
        <div className="d-flex flex-column align-items-center">
        <p className="text-blue text-center">PRODUCTS</p>
        <h2 className="subtitle-dark fs-1 text-center">Reliable Tools & Equipment</h2>
        </div>

        <Row className="mb-5 mb-md-0 mt-3 mt-md-3 mt-md-5 gap-md-5">
             <Col lg={2} xs={6} className="mb-4 mx-md-0">
                          <div className="position-relative">
                            <MainProduct1 className=" w-100 h-100" />
                              <h3 className="position-absolute top-0 left-50 mt-4 text-blue fs-6 w-100 text-center">PCD & PCBN Cutting Tools</h3>
                          <div className="productArrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                            <ArrowBtnBlack className="productArrow-icon black" />
                            <ArrowBtnGreen className="productArrow-icon green"  onClick={() => navigate("/products/1")}/>
                          </div>
                          </div>
               </Col>
                <Col md={2} xs={6} className="mb-4 mx-md-1">
                          <div className="position-relative">
                            <MainProduct2 className=" w-100 h-100" />
                              <h3 className="position-absolute top-0 left-50 mt-4 text-blue fs-6 w-100 text-center">Drills & Endmills</h3>
                          <div className="productArrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                            <ArrowBtnBlack className="productArrow-icon black" />
                            <ArrowBtnGreen className="productArrow-icon green" onClick={() => navigate("/products/2")}/>
                          </div>
                          </div>
               </Col>
               <Col md={2} xs={6} className="mb-4 mx-md-1">
                          <div className="position-relative">
                            <MainProduct3 className=" w-100 h-100" />
                              <h3 className="position-absolute top-0 left-50 mt-4 text-blue fs-6 w-100 text-center">Diamond Tooling Accessories</h3>
                          <div className="productArrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                            <ArrowBtnBlack className="productArrow-icon black" />
                            <ArrowBtnGreen className="productArrow-icon green" onClick={() => navigate("/products/3")}/>
                          </div>
                          </div>
               </Col>
               <Col md={2} xs={6} className="mb-4 mx-md-1">
                          <div className="position-relative">
                            <MainProduct4 className=" w-100 h-100" />
                              <h3 className="position-absolute top-0 left-50 mt-4 text-blue fs-6 w-100 text-center">Grinding Wheels</h3>
                          <div className="productArrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                            <ArrowBtnBlack className="productArrow-icon black" />
                            <ArrowBtnGreen className="productArrow-icon green" onClick={() => navigate("/products/4")}/>
                          </div>
                          </div>
               </Col>
               <Col md={2} xs={6} className="mb-4 ms-md-1">
                          <div className="position-relative">
                            <MainProduct5 className=" w-100 h-100" />
                              <h3 className="position-absolute top-0 left-50 mt-4 text-blue fs-6 w-100 text-center">Other Precision Tools</h3>
                          <div className="productArrow-btn position-absolute bottom-0 end-0 cursor-pointer">
                            <ArrowBtnBlack className="productArrow-icon black" />
                            <ArrowBtnGreen className="productArrow-icon green" onClick={() => navigate("/products/5")}/>
                          </div>
                          </div>
               </Col>
        </Row>
      </Container>
    </section>
  );
}
