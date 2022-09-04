import React from "react";

import "./navbar.css";
import "../../assets/global.css";

import Button from "../Button";

const NavBar = (props) => {
  const handleCategorySelect = (category) => props.setKeyword(category);

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <Button
            name="Breakfast"
            onClick={() => handleCategorySelect("breakfast")}
          />
          <Button name="Lunch" onClick={() => handleCategorySelect("lunch")} />
          <Button
            name="Dinner"
            onClick={() => handleCategorySelect("dinner")}
          />
          <Button name="All" onClick={() => handleCategorySelect("")} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
