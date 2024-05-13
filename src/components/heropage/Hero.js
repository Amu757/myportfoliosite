import React from "react";
import "../homepage.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import Loadicons from "./Loadicons";

import Typed from 'typed.js';

 




const Hero = () => {

 // Create reference to store the DOM element containing the animation
 const el = React.useRef(null);

 React.useEffect(() => {
   const typed = new Typed(el.current, {
     strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
     typeSpeed: 50,
     backSpeed:90,
     backDelay:900,
     loop:true
   });

   return () => {
     // Destroy Typed instance during cleanup to stop animation
     typed.destroy();
   };
 }, []);


  return (
    <div className="hero" id="herosec">
      <div className="hero-content">
          <h3>Hello, It's Me</h3>
          <h1>Aman Waghmare</h1>
          <h3>And I'm <span className="text" ref={el}></span></h3>
          <p>
          specialized in crafting dynamic front-ends with React.js, powering server-side operations with Node.js and Express.js, and managing databases seamlessly with MongoDB.
          </p>

          <div className="sociallinks">
            <Loadicons
              icon={FaLinkedinIn}
              href={"https://www.linkedin.com/in/amanwaghmare/"}
              styleno={"6"}
            />
            <Loadicons icon={FaFacebookF} href={""} styleno={"7"} />
            <Loadicons icon={GrInstagram} href={""} styleno={"8"} />
            <Loadicons icon={IoLogoTwitter} href={""} styleno={"9"} />

          </div>
          <div className="btn moreaboutbtn" >
            More About Me
          </div>
      </div>
    </div>
  );
};

export default Hero;
