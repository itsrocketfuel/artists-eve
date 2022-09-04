import React from "react";
import "./button.css";

const Button = (props) => {
  return <button className="btn-group__item">{props.name}</button>;
};

export default Button;
