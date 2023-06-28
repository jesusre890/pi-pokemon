import React from "react";
import style from './Card.module.css'

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardTitle}>
        <h2>{props.name}</h2>
      </div>
      <div className={style.cardDivisor}/>
      <div className={style.cardInfo}>
        <h4>{props.id}</h4>
        <br />
        <h4>{props.hp}</h4>
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
};

export default Card;
