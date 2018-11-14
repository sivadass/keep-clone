import React from "react";
import trash from "../../images/trash-2.svg";
import add from "../../images/plus-circle.svg";
import addWhite from "../../images/plus-circle-white.svg";
import circle from "../../images/circle.svg";
import check from "../../images/check-circle.svg";
import edit from "../../images/edit-2.svg";

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
