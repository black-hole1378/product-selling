import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar-link">
            Collections
          </Link>
        </li>
        <li>
          <Link to="/men" className="navbar-link">
            Men
          </Link>
        </li>
        <li>
          <Link to="/women" className="navbar-link">
            Women
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
