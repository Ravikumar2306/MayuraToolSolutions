// ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash, pathname]);

  return null;
}

