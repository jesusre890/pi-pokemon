const { Pokemon, Type } = require("../db");
const axios = require("axios");

//Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

const getPokemonsApi = () => {};

const getPokemonsById = () => {};

const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name }, //especifica el campo y valor para la busqueda
    defaults: {
      name: name,
      image: image,
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
    },
  });
  if (!created) throw new Error("Este pokemon ya existe");

  const typesPokemon = await Type.findAll({ where: { name: types } });
  pokemon.setTypes(typesPokemon);

  //console.log(pokemon);
  return pokemon;
};

module.exports = {
  getPokemonsApi,
  getPokemonsById,
  createPokemon,
};
