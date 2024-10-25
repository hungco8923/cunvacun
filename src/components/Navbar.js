import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <Link to="/cunvacun/" className="logo">
        &hearts
      </Link>

      <nav className="navbar">
        <Link to="/cunvacun/">Home</Link>
        <Link to="/cunvacun/gallery">Gallery</Link>
      </nav>
    </header>
  );
}
