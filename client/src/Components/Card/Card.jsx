import React from "react";
import style from './Card.module.css'

const Card = ({ id, image, name, types }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardTitle}>
        <h3>{name}</h3>
        <h5>{id}</h5>
      </div>

      <div className={style.cardInfo}>
        <br />
        <img src={image} alt={name} />
      </div>
      <div className={style.cardInfo}>
          <h5>{types}</h5>
      </div>
    </div>
  );
};

export default Card;
