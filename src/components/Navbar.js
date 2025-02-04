import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="col-12 container d-flex justify-content-center  navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div>
            <img src={Logo} className="navbar-brand" />
          </div>

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
        </div>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link w-auto" to="/customerService">
                Customer Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light btn btn-danger btn-highlight"
                to="/kalkulatorPajak"
              >
                Kalkulator Pajak
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
