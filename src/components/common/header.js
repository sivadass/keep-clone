import React from "react";
import logo from "../../images/logo.svg";
import Icon from "./icons";

const Header = () => {
  return(
    <div className="header">
      <div className="container">
        <img className="logo" src={logo} alt="Keep" />
        <a href="#" className="">
          <Icon name="more-menu" size="24" />
        </a>
      </div>
    </div>
  )
}

export default Header;
