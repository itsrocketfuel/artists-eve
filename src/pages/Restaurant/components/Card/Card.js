import React, { useState } from "react";
import "./card.css";
import Menu from "../../../../data/menuApi";

const Card = (props) => {
  const menuData = React.useMemo(
    () =>
      Menu.filter(
        (item) => item.category === props.keyword || props.keyword === "",
      ),
    [props.keyword],
  );
  console.log(props.keyword);

  return (
    <>
      <section className="main-card-container">
        {menuData.map((currentElement) => {
          return (
            <>
              <div className="card-container" key={currentElement.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {currentElement.id}
                    </span>
                    <span className="card-author subtle">
                      {currentElement.category}
                    </span>
                    <h2 className="card-title">{currentElement.name}</h2>
                    <span className="card-description subtle">
                      {currentElement.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={currentElement.image}
                    alt="images"
                    className="card-media"
                  />
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;
