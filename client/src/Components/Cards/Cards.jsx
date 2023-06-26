import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
        <Card key="1" id="52" name="charizard" hp="164" />
        <Card key="3" id="32" name="pikachu" hp="164" />
        <Card key="4" id="53" name="eevee" hp="164" />
        <Card key="2" id="55" name="pidgeot" hp="164" />
        <Card key="6" id="32" name="geodude" hp="164" />
    </div>
  );
};

export default Cards;
