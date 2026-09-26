import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import List from "../assets/humburger-Icon.svg?react";
import "../styles/navbar.css";

export default function AppNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

   const closeMenu = () => {
  setShowMenu(false);
  setActiveLink("");
  setShowProducts(false);
};

const scrollToSection = (id) => {
  closeMenu();

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const goToSection = (sectionId) => {
  closeMenu();

  navigate("/", {
    state: { scrollTo: sectionId }
  });
};

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <Navbar
        expand="lg"
        sticky="top"
        className="py-4 d-none d-lg-flex"
        style={{ background: "#fff" }}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" height="60" />
          </Navbar.Brand>

          <Nav className="mx-auto gap-5 align-items-center">
            <Nav.Link as={NavLink} to="/#home">Home</Nav.Link>

            {/* ===== CUSTOM PRODUCTS DROPDOWN ===== */}
            <div
              className="products-wrapper"
              onClick={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button className="products-btn">
                Products
                <span
                  className={`arrow ${showProducts ? "rotate" : ""}`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`products-dropdown ${
                  showProducts ? "open" : ""
                }`}
              >
                <div className="products-col">
                  <div className="product-item"  onClick={() => navigate("/products/1")}>
                    • PCD & PCBN Cutting Tools
                  </div>
                  <div className="product-item"  onClick={() => navigate("/products/2")}>
                    • Drills & Endmills
                  </div>
                  <div className="product-item"  onClick={() => navigate("/products/3")}>
                    • Diamond Tooling Accessories
                  </div>
                </div>

                <div className="products-col">
                  <div className="product-item"  onClick={() => navigate("/products/4")}>
                    • Grinding Wheels
                  </div>
                  <div className="product-item"  onClick={() => navigate("/products/5")}>
                    • Other Precision Tools
                  </div>
                </div>
              </div>
            </div>

            <Nav.Link as="button"
  className="nav-link"
  onClick={() => goToSection("about")}>About Us</Nav.Link>
            <Nav.Link as="button"
  className="nav-link"
  onClick={() => goToSection("industries")}>Industries</Nav.Link>
          </Nav>

          {/* Contact Button */}
            <NavLink
              className="px-4 py-3 rounded-pill green-bg contact-btn" 
              to="/contact"
            >
              Contact Us
            </NavLink>
        </Container>
      </Navbar>

    {/* ===== MOBILE NAVBAR ===== */}
<Navbar
  className="d-lg-none py-3"
  sticky="top"
  style={{
    backgroundColor: "#fff",
    zIndex: 1040
  }}
>
  <Container className="d-flex align-items-center">
    <button
      className="border-0 bg-transparent fs-3"
      onClick={() => setShowMenu(true)}
    >
      <List />
    </button>

    <Navbar.Brand className="mx-auto" href="/">
      <img src={Logo} alt="Logo" height="60" />
    </Navbar.Brand>

    <div className="me-5"></div>
  </Container>
</Navbar>


      {/* ===== MOBILE OFFCANVAS ===== */}
<Offcanvas
  show={showMenu}
  onHide={closeMenu}
  placement="start"
  restoreFocus={false}
  autoFocus={false}
  style={{ background: "#0C284B", width: "80%" }}
>
  <Offcanvas.Header closeButton closeVariant="white" />

  <Offcanvas.Body>
    <Nav className="flex-column gap-3">

      <Nav.Link className={'mobile-link'} as={NavLink} to="/#home" onClick={closeMenu}>Home</Nav.Link>

      {/* Mobile Products */}
<div>
  <Nav.Link
    className={`mobile-link d-flex justify-content-between align-items-center ${
      activeLink === "products" ? "active" : ""
    }`}
    onClick={() => {
      const isOpen = !showProducts;
      setShowProducts(isOpen);
      setActiveLink(isOpen ? "products" : ""); // ✅ key line
    }}
  >
    Products
    <span className={`arrow ${showProducts ? "rotate" : ""}`}>▼</span>
  </Nav.Link>

  {showProducts && (
    <div className="px-3 products-bg">
      <div className="mobile-item" onClick={() => { navigate("/products/1"); closeMenu(); }}>• PCD & PCBN Cutting Tools</div>
      <div className="mobile-item" onClick={() => { navigate("/products/2"); closeMenu(); }}>• Drills & Endmills</div>
      <div className="mobile-item" onClick={() => { navigate("/products/3"); closeMenu(); }}>• Diamond Tooling Accessories</div>
      <div className="mobile-item" onClick={() => { navigate("/products/4"); closeMenu(); }}>• Grinding Wheels</div>
      <div className="mobile-item" onClick={() => { navigate("/products/5"); closeMenu(); }}>• Other Precision Tools</div>
    </div>
  )}
</div>
      <Nav.Link className={'mobile-link'} onClick={() => {
    closeMenu();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    navigate("/", { state: { scrollToSection: true } });
  }}>About Us</Nav.Link>
      <Nav.Link className={'mobile-link'} onClick={() => {
    closeMenu();
    document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" });
    navigate("/", { state: { scrollToSection: true } });
  }}>Industries</Nav.Link>
      <Nav.Link className={'mobile-link'} as={NavLink} to="/contact" onClick={closeMenu}>Contact</Nav.Link>
    </Nav>
  </Offcanvas.Body>
</Offcanvas>

    </>
  );
}
