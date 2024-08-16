import React, { useState } from "react";
import "./homepage.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:amanwaghmare311@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    
    // Reset the form fields to empty
    setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
   
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 0);
  };

  return (
    <div className="hero" id="servicesbaner">
      <h1 id="title">
        My{" "}
        <span className="spanword" id="contactsec">
          Contact
        </span>
      </h1>
      <section className="contactsection">
        <div className="leftside">
          <h2>Let's Work Together</h2>
          <p>
            Seeking exciting opportunities in software development <br />
            to apply and expand my expertise.
          </p>
          <a href="mailto:amanwaghmare311@gmail.com">
            amanwaghmare311@gmail.com
          </a>
          <p>705 888 3563</p>

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
              <IoLogoTwitter className="actualicon" />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rightside">
          <input
            name="name"
            placeholder="Enter Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Enter Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="subject"
            placeholder="Enter Your Subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows={10}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn moreaboutbtn">
            Submit
          </button>
        </form>
      </section>

      <p className="auther">Developed with love by Aman Waghmare @ 2024</p>
    </div>
  );
}
