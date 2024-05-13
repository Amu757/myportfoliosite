import React from "react";

export default function Anchers(props) {
  return (
    <>
      <a
        href={props.href}
        className={props.ifclass}
        style={{ "--i": props.styleno }}
      >
        {props.text}
      </a>
    </>
  );
}
