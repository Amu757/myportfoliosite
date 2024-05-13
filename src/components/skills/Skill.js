import React from "react";
import "../homepage.css";
import Loadicons from "./Loadicon";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { BsDatabaseAdd } from "react-icons/bs";
import { SlSocialGithub } from "react-icons/sl";

import { FaTeamspeak } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiSpottedBug } from "react-icons/gi";
export default function skills() {
  return (
    <div className="hero" id="servicesbaner">
      <h1 id="title">
        My <span className="spanword" id="skillssec">Skills</span>
      </h1>
      <div className="serviceslist">
        <section className="Technical_skills">
          <h1 className="skilltitle">Technical skills</h1>
          <Loadicons
            icon={FaJava}
            desc={"Programming languages: JavaScript, Java, C++"}
          />
          <Loadicons
            icon={FaReact}
            desc={"Frameworks : React.js, Express.js"}
          />
          <Loadicons
            icon={BsDatabaseAdd}
            desc={"Database Management: MongoDB , MySQL"}
          />
          <Loadicons icon={SlSocialGithub} desc={"Version Control : Github"} />
        </section>

        <section className="Professional_skills">
          <h1 className="skilltitle">Professional skills</h1>

          <Loadicons
            icon={FaTeamspeak}
            desc={"Team Commuication : Effective collaboration skills."}
          />
          <Loadicons
            icon={GiSpottedBug}
            desc={"Problem Solving : Analyze, innovate solutions."}
          />
          <Loadicons
            icon={GiBackwardTime}
            desc={"Time Managment : Prioritize, meet deadlines efficiently."}
          />
          <Loadicons
            icon={RiLightbulbFlashLine}
            desc={"Continuous Learning: Stay updated on industry trends."}
          />
        </section>
      </div>
    </div>
  );
}
