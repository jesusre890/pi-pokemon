import React from "react";
import style from "./Card.module.css";

const Card = ({ image, name, types, hp, id }) => {
  return (
    <div className={style.cardContainer} key={id}>
      <div className={style.cardTitle}>
        <h2 className={style.nameCard}>{name}</h2>
        <h5 className={style.hp}>Hp: {hp}</h5>
      </div>
      <div className={style.cardInfo}>
        <img src={image} alt={name} />
        <div className={style.cardInfo}>
          {types.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
