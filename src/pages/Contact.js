
import React from "react";
// import ContactCard from "../components/Card/ContactCard"; 
// import "./Contact.css";
import Footer from "../components/Footer/Footer";
import { Container, Row } from "../components/Grid";
import { ContactPage } from "../components/Card/Contact/index.js";

function Contact() {
    return (
        <div className="contact-body">
        <Container >
        <Row>
        <ContactPage />
        <br></br>
        <br></br>
        <br></br>
        </Row>
        <Footer />
        </Container>
        </div>
    );
  }
  
  export default Contact;
  