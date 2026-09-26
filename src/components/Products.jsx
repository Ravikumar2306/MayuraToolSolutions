import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productData from "./data/products.json";

export default function Products() {
  const { id } = useParams();

    const product = productData.products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p className="text-center mt-5">Product not found</p>;
  }


  return (
    <section className="mb-md-5 pb-5 pt-4 border-top">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <p className="text-blue text-center">PRODUCTS</p>

          <Row className="align-items-center">
            {/* Text Content */}
            <Col lg={6} className="order-2 order-md-1 mt-4 mt-md-0">
              <h2 className="subtitle-dark fs-1">{product.title}</h2>

              <p className="text-dark-gray">
                {product.description}
              </p>

              <h2 className="subtitle-dark fs-5 fw-bold">
                Product Range:
              </h2>

              <ul className="text-dark-gray ps-3">
                {product.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>

            {/* Image */}
            <Col lg={6} className="text-center order-1 order-md-2">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
