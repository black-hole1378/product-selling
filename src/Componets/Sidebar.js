import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./styles/sidebar.css";
import { Link } from "react-router-dom";
function Sidebar({ sidebar, toggle }) {
  return (
    <div className={sidebar ? "sidebar sidebar--active" : "sidebar"}>
      <button type="button" className="cross-button" onClick={toggle}>
        <CloseIcon />
      </button>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/men" className="nav-link">
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" className="nav-link">
              Women
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
