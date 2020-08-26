import React from 'react';
import projectTwoImage from "../../Assets/Images/triva-generator.JPG";
import Card from 'react-bootstrap/Card';




function CardProjectTwo() {
  return (
    <Card className="bg-dark" border="primary" style={{ width: '28rem' }}>
      <div className="hovereffect">
        <Card.Img src={projectTwoImage} alt="Card image" style={{ width: 450, height: 250 }} />
        <div className="overlay">
          <Card.ImgOverlay>
            <Card.Title>Trivia Generator</Card.Title>
            <Card.Subtitle>Group Project</Card.Subtitle>
            <Card.Text>
              This app generates trivia quizzes from a category of choice. Determine the number of questions each quiz will have. Each question is timed to ensure quick response. Created by: Azucena Gonzalez, Tom Black, and Schwyn Francis.
            </Card.Text>
            <Card.Text>Technologies/Concepts: Jquery, Bootstrap, MaterializeCSS</Card.Text>
            <Card.Link href="https://tomtimusprime.github.io/Trivia-game-builder/">Visit</Card.Link>
            <Card.Link href="https://github.com/tomtimusprime/Trivia-game-builder">Github</Card.Link>
          </Card.ImgOverlay>
        </div>
      </div>
    </Card>
  );
}

export default CardProjectTwo; 
