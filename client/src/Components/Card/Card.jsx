import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-title">
        <h2>{props.name}</h2>
      </div>
      <div className="card-divisor" />
      <div className="card-info">
        <h4>{props.id}</h4>
        <br />
        <h4>{props.hp}</h4>
      </div>
    </div>
  );
};

export default Card;
