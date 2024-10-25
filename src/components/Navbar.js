import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        &hearts
      </Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
}
