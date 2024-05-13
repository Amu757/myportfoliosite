import React from "react";
import "./homepage.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";

export default function Contact() {
  return (
    <div className="hero" id="servicesbaner">
      <h1 id="title">
        My <span className="spanword" id="contactsec">Contact</span>
      </h1>
      <section className="contactsection">
        <div className="leftside">
          <h2>Let's Work Together</h2>
          <p >
          Seeking exciting opportunities in software development <br/>to apply and expand my expertise.
          </p>
          <a href="mailto:amanwaghmare311@gmail.com">amanwaghmare311@gmail.com</a>
          <p> 705 888 3563</p>

          <div className="sociallinks">
            <a
              href="https://www.linkedin.com/in/amanwaghmare/"
              className="iconbox"
              style={{ "--i": 6 }}
            >
              <FaLinkedinIn className="actualicon" />
            </a>
            <a
              href="https://www.linkedin.com/in/amanwaghmare/"
              className="iconbox"
              style={{ "--i": 7 }}
            >
              <FaFacebookF className="actualicon" />
            </a>
            <a
              href="https://www.linkedin.com/in/amanwaghmare/"
              className="iconbox"
              style={{ "--i": 8 }}
            >
              <GrInstagram className="actualicon" />
            </a>
            <a
              href="https://www.linkedin.com/in/amanwaghmare/"
              className="iconbox"
              style={{ "--i": 9 }}
            >
              <IoLogoTwitter className="actualicon"  />
            </a>
          </div>
        </div>
        <form method="POST" className="rightside">
          <input placeholder="Enter Your Name" type="text"></input>
          <input placeholder="Enter Your Email" type="email"></input>
          <input placeholder="Enter Your Subject" type="text"></input>
          <textarea
            placeholder="Enter Your Message"
            rows={10}
            type="text"
          ></textarea>
          <div className="btn moreaboutbtn">
            Submit
          </div>
        </form>
      </section>

      <p className="auther">Developed with love by Aman Waghmare @ 2024</p>
    </div>
  );
}
