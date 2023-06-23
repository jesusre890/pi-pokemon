const { Pokemon, Type } = require("../db");
const axios = require("axios");

//Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

const getPokemons = async (name) => {
  try {
    if (name) {
      //trae el primero que encuentre
      const pokemonByName = await Pokemon.findOne({ where: { name } });
      return pokemonByName;
    }
    const allPokemon = await Pokemon.findAll();
    return allPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPokemonsApi = async () => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10");

    const pokeApi = await api.data.results; //guardo la info en una constante para luego mapear y modificar segun la info de la url

    const pokemonDb = await getPokemons();

    const dataPokemon = await pokeApi.map(async (e) => {
      const infoApi = await axios.get(e.url);

      return {
        id: infoApi.data.id,
        name: infoApi.data.name,
        types: infoApi.data.types.map((e) => e.type.name),
        image: infoApi.data.sprites.front_default,
        hp: infoApi.data.stats[0].base_stat,
        attack: infoApi.data.stats[1].base_stat,
        defense: infoApi.data.stats[2].base_stat,
        speed: infoApi.data.stats[5].base_stat,
        height: infoApi.data.height,
        weight: infoApi.data.weight,
      };
    });

    const pokemonAll = await Promise.all(dataPokemon);
    return pokemonAll.concat(pokemonDb);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPokemonsById = async (idPokemon) => {
  const source = isNaN(idPokemon) ? "bdd" : "api";
  if (source === "api") {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    return pokemon.data;
  }
  const pokemon = await Pokemon.findByPk(idPokemon);
  return pokemon;
};

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
  //console.log(typesPokemon);
  //console.log(pokemon);
  return pokemon;
};

module.exports = {
  getPokemons,
  getPokemonsApi,
  getPokemonsById,
  createPokemon,
};
