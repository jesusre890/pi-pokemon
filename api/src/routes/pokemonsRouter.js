const { Router } = require("express");
const routerPk = Router();
const {
  getPokemonsHandler,
  getPokemonsIdHandler,
  createPokemonsHandler,
} = require("../handlers/pokemonsHandlers.js");

//query
routerPk.get("/", getPokemonsHandler);

//params
routerPk.get("/:idPokemon", getPokemonsIdHandler);

//body
routerPk.post("/create",createPokemonsHandler);

module.exports = routerPk;
