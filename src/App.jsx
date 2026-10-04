import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Hero from "./components/hero";
import About from "./components/about";
import Industries from "./components/industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import MainProducts from "./components/products_main"
import Products from "./components/Products";
import ScrollToHash from "./ScrollToHash";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <section id="about">
      <About />
      </section>

      <section id="industries">
        <Industries />
      </section>
      <WhyChooseUs />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/MayuraToolSolutions">
     <ScrollToHash />
     <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/mainProducts" element={<MainProducts />} />
            <Route path="/products/:id" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
