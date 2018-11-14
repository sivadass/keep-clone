import React from "react";
import logo from "../../images/logo.svg";
import Icon from "../common/icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1 className="logo">Keep</h1>
          <a href="#" className="primary-cta">
            + Add New
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
