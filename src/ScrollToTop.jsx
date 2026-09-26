import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // ✅ If section scroll requested, DO NOTHING
    if (location.state?.scrollToSection) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
}
