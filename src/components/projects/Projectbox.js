import React from "react";
import "../homepage.css";
export default function Projectbox(props) {
  return (
    <div className="projectbox">
      <video autoPlay loop muted>
        <source src={props.vid} type="video/mp4" />
      </video>
        <a href={props.link} target="_blank" className="btn visitpagebtn">
          Visit site
        </a>
    </div>
  );
}
