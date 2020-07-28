import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Resume from "../../Assets/Images/Suzy-resume-2020.pdf";
import { Container } from "../Grid"; 




function ContactCard() {
  return (
    <div>
    <Jumbotron fluid>
  <Container>
    <h1>Contact Me</h1>
  <Card fluid>
  <Card.Body>
    <Card.Title id="contacttitle">Let's get to know each other!</Card.Title>
    <Card.Text id="contacttext">
      Email me:<Card.Link href="azucenaphx@gmail.com">azucenaphx@gmail.com</Card.Link>
      </Card.Text>
      <Card.Text id="contacttext">
      Visit my LinkedIn: <Card.Link href="https://www.linkedin.com/in/azucenahgonzalez/">Visit my Linkedin</Card.Link>
       </Card.Text>
       <Card.Text id="contacttext">
      Visit my Github: <Card.Link href="https://github.com/azu20">Visit My Github</Card.Link>
       </Card.Text>
       <Card.Text id="contacttext">
      View my Resume: <Card.Link href={Resume}>azucenaphx@gmail.com</Card.Link>
    </Card.Text>
   
  </Card.Body>
</Card>
  </Container>
</Jumbotron>
</div>

  );
}

export default ContactCard; 