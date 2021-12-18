import React from "react";
import { NavLink } from "react-router-dom";
import "./FoodSearch/food.css";

export default function Nav(prop) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light  nav-wrap navbar-fixed-top ">
        <div className="container">
          <NavLink style={prop.Tstyle} className="navbar-brand" to="/">
            <img style={prop.height} src={prop.logo} alt="..." />
            {prop.text}
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {/* <li className="nav-item items">
                <NavLink className="nav-link " aria-current="page" to="/todo">
                  To-Do
                  <i className="fas fa-star" style={{ color: "#081158" }}></i>
                </NavLink>
              </li> */}
              <li className="nav-item items">
                <NavLink className="nav-link " aria-current="page" to="/github">
                  GitHub
                </NavLink>
              </li>
              <li className="nav-item items">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/weather"
                >
                  Wether
                </NavLink>
              </li>

              <div className="dropdown mt-2">
                <a
                  className="btn  dropdown-toggle "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Covid
                </a>

                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuLink"
                >
                  <li className="nav-item items">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/covid"
                    >
                      Covid-19
                    </NavLink>
                    <NavLink
                      className="nav-link"
                      arial-current="page"
                      to="/corona"
                    >
                      Covid Cases
                    </NavLink>
                    {/* <NavLink
                      className="nav-link"
                      arial-current="page"
                      to="/ypay"
                    >
                      Y-pay
                    </NavLink> */}
                  </li>
                </ul>
              </div>

              <div className="dropdown mt-2">
                <a
                  className="btn  dropdown-toggle "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Project
                </a>

                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuLink"
                >
                  <li className="nav-item items">
                    <NavLink
                      className="nav-link"
                      arial-current="page"
                      to="/food"
                    >
                      Search Food
                    </NavLink>
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/pokemon"
                    >
                      Pokemon
                    </NavLink>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <a href="tel:9773123233" className="main-btn">
                  <i className="fas fa-angle-right pe-3"></i> Contact Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
