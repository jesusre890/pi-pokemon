import React from "react";
import style from './Card.module.css'

const Card = ({ image, name, types, hp, id }) => {
  return (
    <div className={style.cardContainer} key={id}>
      <div className={style.cardTitle}>
        <h3>{name}</h3>
        <h4>Hp: {hp}</h4>
      </div>
      <div className={style.cardInfo}>
        <img src={image} alt={name} />
      <div className={style.cardInfo}>
          <h5>{types}</h5>
      </div>
      </div>
    </div>
  );
};

export default Card;
