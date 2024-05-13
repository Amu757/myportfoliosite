import React from "react";
import "../homepage.css"

export default function Card(props) {
  return (
    <div>
      <h2>{<props.icon/>}</h2>
      <h2>{props.title}</h2>
      <p className="description">{props.description} </p>
      <a href={props.href} className="read">
        Read more
      </a>
    </div>
  );
}
