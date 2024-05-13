import React from "react";
import "../homepage.css";
import Card from "./Card";
import { GiSpiderWeb } from "react-icons/gi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { GrServerCluster } from "react-icons/gr";
import { GrDeploy } from "react-icons/gr";

export default function Services() {
  return (
    <div className="hero" id="servicesbaner">
      <h1 id="title">
        My <span className="spanword">Services</span>
      </h1>
      <div className="serviceslist">
        <Card
          icon={GiSpiderWeb}
          tilte={"Web App Development"}
          description={
            "Using MERN stack to create dynamic and interactive web apps with robust scalability and performance."
          }
          href={""}
        />
        <Card
          icon={MdScreenSearchDesktop}
          tilte={"Front-End Developmen"}
          description={
            "Designing and developing responsive user interfaces using React.js for seamless user experience."
          }
          href={""}
        />
        <Card
          icon={GrServerCluster}
          tilte={"Server-Side Logic"}
          description={
            "Writing server-side logic using Node.js to handle requests,perform operations, and interact with the database."
          }
          href={""}
        />
        <Card icon={GrDeploy} tilte={"Deployment and Hosting"} description={"Deploying applications to cloud platforms like Heroku or AWS and ensuring smooth operation in production envirnment."} href={""} />
     
      
      </div>
    </div>
  );
}
