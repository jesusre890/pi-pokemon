import React from "react";
import Card from "../Card/Card";
import style from './Cards.module.css'

const Cards=({allPokemons}) => {
  //PAGINADO

  return (
    <div className={style.cardsContainer}>
      {allPokemons.map((pokemon, index) => (
        <Card
          key={index}
          name={pokemon.name}
          hp={pokemon.hp}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};

export default Cards;
