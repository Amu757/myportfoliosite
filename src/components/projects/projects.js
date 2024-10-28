import React from "react";
import "../homepage.css";
import Projectbox from "./Projectbox";
const ecomvid = require("../../projectimages/ecommerce/ecomm_video.mp4");
const blognestvid = require("../../projectimages/blognest/blognest_vid.mp4");
const currencyvid = require("../../projectimages/currency/currencyconvertor vid.mp4");
const movieratingvid = require("../../projectimages/movierating/movieratingvid.mp4");
const studytubevid = require("../../projectimages/studytube/studytube_vid.mp4")

const ecomlink = "https://ecommerce-site-ten-theta.vercel.app/";
const BlogNestlink = "https://blog-nest-blue.vercel.app/";
const currencylink = "https://currency-converter-seven-woad.vercel.app/";
const movieratinglink = "https://movie-ratings-lake.vercel.app/";
const studytubelink = "https://studytube-frontend.vercel.app/"

export default function projects() {
  return (
    <div className="" id="projectcontainer">
      <h1 id="title" className="projectstop">
        My{" "}
        <span className="spanword" id="projectssec">
          Projects
        </span>
      </h1>
      <div className="" id="projectbox-container">
        <Projectbox vid={studytubevid} link={studytubelink} />
        <Projectbox vid={ecomvid} link={ecomlink} />
        <Projectbox vid={blognestvid} link={BlogNestlink} />
        <Projectbox vid={movieratingvid} link={movieratinglink} />
        <Projectbox vid={currencyvid} link={currencylink} />
      </div>
    </div>
  );
}
