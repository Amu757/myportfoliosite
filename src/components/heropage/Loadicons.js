import React from "react";
// import { FaLinkedinIn } from "react-icons/fa6";
import "../homepage.css";

export default function Loadicons(props) {
  return (
    <>
      <a href={props.href} className="iconbox" style={{ "--i": props.styleno }}>
        <props.icon className="actualicon" />
      </a>
    </>
  );
}
