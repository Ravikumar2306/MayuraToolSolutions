// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />   {/* Page content changes here */}
      <CTA />
      <Footer />
    </>
  );
}
