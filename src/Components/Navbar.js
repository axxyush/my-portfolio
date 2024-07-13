import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Ayush Srivastava
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  See More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/education">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/experience">
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/skills">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/seeMore">
                      Resume
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={props.mode === "light"}
                onChange={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === `light` ? `dark` : `light`
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Light Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
