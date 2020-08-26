import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";
// import NewPortfolio from "../pages/new-portfolio/new-portfolio";

function Navbar() {
    return (
        <nav className="navbar-top navbar-expand-lg">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><a className="navbar-brand" href="/">Azucena Gonzalez</a>ls</span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link
              to="/Portfolio"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
                     
                    </li>
                    <li className="nav-item">
                    <Link
              to="/Contact"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
                    </li>
                    <li className="nav-item">
                    <Link
              to="/NewPortfolio"
              className={
                window.location.pathname === "/" || window.location.pathname === "/NewPortfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              NewPortfolio
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;
