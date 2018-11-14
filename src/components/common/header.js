import React from "react";
import logo from "../../images/logo.svg";
import Icon from "./icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <img className="logo" src={logo} alt="Keep" />
          <a href="#" className="primary-cta">
            <Icon name="add" size="18" /> Add New
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
