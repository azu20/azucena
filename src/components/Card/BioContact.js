import React from 'react';
import Image from 'react-bootstrap/Image'
import Resume from "../../Assets/Images/ResumeSmall.JPG";
import ResumeLink from "../../Assets/Images//Suzy-resume-2020.pdf";
import LinkedIn from "../../Assets/Images/LI-In-Bug-small.png";
import GitHub from "../../Assets/Images/GitHub-Mark-Light-32px.png";

function BioContact() {
    return (
        <>
           
            <div className="text-center">
            <h4 className="homecontact">Feel free to check out my pages!</h4>
                <Image src={Resume} className="smallpix" alt="Resume" style={{ width: 60, height: 60 }}  /><a href={ResumeLink} className="text-weight-bolder" id="links">Resume</a>
                <br></br>
                <br></br>
                <Image src={GitHub} className="smallpix" alt="Github-logo" style={{ width: 60, height: 60 }} /><a href="https://github.com/azu20"
                    className="text-weight-bolder" id="links">My Github Page</a>
                <br></br>
                <br></br>
                <Image src={LinkedIn} className="smallpix" alt="LinkedIn-logo" style={{ width: 60, height: 60 }}  /><a
                    href="https://www.linkedin.com/in/azucenahgonzalez/" className="text-weight-bolder" id="links">My LinkedIn
                Page</a>
                <br></br>
                <br></br>
            </div>

            <br></br>
            <br></br>
            <br></br>

      
        </>

    );
}
export default BioContact; 