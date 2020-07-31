import React from 'react';
import projectOneImage from "../../Assets/Images/dasflix_project.JPG";
import Card from 'react-bootstrap/Card';
// import Overlay from 'react-bootstrap/Overlay'; 



function newCardOne() {
  return (
    <Card className="NewCard">
      <div className="hovereffect">
        <Card.Img src={projectOneImage} alt="Card image" />
        <div className="overlay">
          <Card.ImgOverlay>
            <Card.Title>DAS FLIX</Card.Title>
            <Card.Subtitle>Group Project</Card.Subtitle>
            <Card.Text>
              DasFlix is a CRUD MVC project, built to help end users browse, create favorite TV shows and movies. This app was created by the University of Arizona Students: Azucena Gonzalez, Denzell Grant, and Stephen Studer.
           </Card.Text>
            <Card.Text>Technologies/Concepts: SQL, MySQL, CRUD, MVC, OOP</Card.Text>
            <Card.Link href="http://www.dasflix.com">Visit</Card.Link>
            <Card.Link href="https://github.com/denzgrant/DasFlix-">Github</Card.Link>
          </Card.ImgOverlay>
        </div>
      </div>
    </Card>
  );
}

export default newCardOne; 