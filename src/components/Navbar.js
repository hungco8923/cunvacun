import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Lock scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup on unmount
    };
  }, [menuOpen]);

  return (
    <header className={`header ${menuOpen ? "open" : ""}`}>
      <Link
        style={{ textDecoration: "none" }}
        to="/cunvacun/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        Cun&Cun
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "x" : "☰"}
      </button>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/cunvacun/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/cunvacun/gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </Link>
      </nav>
    </header>
  );
}
