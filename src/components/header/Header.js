import React from "react";
import "../homepage.css";
import Anchers from "./Anchers";
const Header = () => {
  return (
    <div className="header">
        <Anchers href={"#"} ifclass={"logo"} styleno={"1"} text={"Portfolio"} />
      <nav className="navbar">
        
        <Anchers href={"#herosec"} ifclass={""} styleno={"2"} text={"Home"} />
        <Anchers href={"#aboutsec"} ifclass={""} styleno={"3"} text={"About"} />
        <Anchers href={"#skillssec"} ifclass={""} styleno={"4"} text={"Skills"} />
        <Anchers href={"#projectssec"} ifclass={""} styleno={"5"} text={"Projects"} />
        <Anchers href={"#contactsec"} ifclass={""} styleno={"6"} text={"Contact"} />
      </nav>
    </div>
  );
};

export default Header;
