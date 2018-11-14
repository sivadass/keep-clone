import React from "react";
import trash from "../../images/trash-2.svg";
import add from "../../images/plus-circle.svg";
import addWhite from "../../images/plus-circle-white.svg";
import circle from "../../images/circle.svg";
import check from "../../images/check-circle.svg";
import checkSimple from '../../images/check-simple.svg';
import edit from "../../images/edit-2.svg";
import more from "../../images/more-vertical.svg"

const renderIcon = name => {
  switch (name) {
    case "add":
      return add;
    case "add-white":
      return addWhite;
    case "check-circle":
      return circle;
    case "trash":
      return trash;
    case "edit":
      return edit;
    case "more-menu":
      return more;
    case "check-simple":
      return checkSimple
    default:
      return check;
  }
};

const Icon = ({ name, size }) => {
  return (
    <img
      className={`icon icon-${name}`}
      src={renderIcon(name)}
      height={size || 14}
      width={size || 14}
      alt="icon"
    />
  );
};

export default Icon;
