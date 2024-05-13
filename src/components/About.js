import React from "react";
import "./homepage.css";

export default function About() {
  return (
    <div className="hero" id="aboutsec">
      <div className="banner-content" id="aboutcontener">
        <div className="leftpart">
          <div className="btn moreaboutbtn" id="aboutbtn">
            More About Me
          </div>
        </div>
        <div className="rightpart" id="abouttitle">
          <h1>
            About <span className="spanword">Me</span>
          </h1>
          <h2 className="mytag">Full Stack Web-Developer</h2>
          <p>
            Hi there! I'm Aman Waghmare, a recent MCA graduate with a keen
            interest in tackling real-world problems through intuitive website
            solutions. Proficient in the MERN stack, <br/><br/>
             I specialize in crafting dynamic front-ends with React.js, powering 
            server-side operations with Node.js and Express.js, and managing 
            databases seamlessly with MongoDB. Additionally, I have a strong 
            foundation in C++ and Core Java, leveraging OOP concepts and data
            structures effectively.Currently exploring the realms of data science,<br/><br/>
             I am diving into AI and data analysis to broaden my skill set. Seeking 
            exciting opportunities in software development to apply and expand my
            expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
