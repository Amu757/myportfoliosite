import React from "react";

export default function Loadicons(props) {
  return (
    <section className="iconsection" style={{display:"flex", gap:"10px" ,marginBottom:"10px"}}>
      <h2>{<props.icon />}</h2>
      <h3>{props.desc}</h3>
    </section>
  );
}
