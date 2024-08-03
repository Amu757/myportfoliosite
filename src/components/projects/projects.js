import React from "react";
import "../homepage.css";
import Projectbox from "./Projectbox";
const ecomvid = require("../../projectimages/ecommerce/ecomm_video.mp4");
const ecomlink = "https://ecommerce-site-ten-theta.vercel.app/";

const BlogNestlink = "https://blog-nest-blue.vercel.app/"

export default function projects() {
  return (
    <div className="" id="projectcontainer">
      <h1 id="title" className="projectstop">
        My <span className="spanword" id="projectssec">Projects</span>
      </h1>
      <div className="" id="projectbox-container">
        <Projectbox vid={ecomvid} link={ecomlink}/>
        <Projectbox vid={ecomvid} link={BlogNestlink}/>
        <Projectbox vid={ecomvid} link={ecomlink}/>
        <Projectbox vid={ecomvid} link={ecomlink}/>

      </div>
    </div>
  );
}
