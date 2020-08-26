import React from 'react';
import projectFiveImage from "../../Assets/Images/TeamGenerator2.PNG";
import Card from 'react-bootstrap/Card';
// import Overlay from 'react-bootstrap/Overlay'; 



function CardProjectFive() {
  return (
    <Card className="bg-dark" border="primary" style={{ width: '28rem' }}>
      <div className="hovereffect">
        <Card.Img src={projectFiveImage} alt="Card image" style={{ width: 450, height: 250 }} />
        <div className="overlay">
          <Card.ImgOverlay>
            <Card.Title>Team Generator</Card.Title>
            <Card.Subtitle>Individual Project</Card.Subtitle>
            <Card.Text>
            Command line application prompts user the for information about the team manager and team members. Once the team is complete, the application will generate HTML page displaying all team members.
    </Card.Text>
            <Card.Text>Technology/Concepts: OOP, Axios, MySQL, Sequelize</Card.Text>
            <Card.Link href="https://github.com/azu20/Team-generator">Command line deployment</Card.Link>
            <Card.Link href="https://github.com/azu20/Team-generator">Github</Card.Link>
          </Card.ImgOverlay>
        </div>
      </div>
    </Card>
  );
}

export default CardProjectFive; 