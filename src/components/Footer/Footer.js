import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./Footer.css";


function Footer() {
  return (
    <div className="text-center">
    <Navbar className="footer" fixed="bottom" variant="dark">
      <Navbar.Brand className="navbar-brand2" href="#home">
        {' '}
      &copy;Suzy Gonzalez
    </Navbar.Brand>
    </Navbar>
  </div >
  );
}

export default Footer; 