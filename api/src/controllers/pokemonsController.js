const { Pokemon, Type } = require("../db");
const axios = require("axios");

//Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

const getPokemons = async (name) => {
  try {
    if (name) {
      //trae el primero que encuentre en la base de datos
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
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=5");

    const pokeApi = api.data.results; //guardo la info en una constante para luego mapear y modificar segun la info de la url

    const pokemonDb = await getPokemons();

    const dataPokemon = await Promise.all(
      //Con Promise.all se espera a que todas las promesas dentro de (dataPokemon) se resuelvan y obtienes un array con los resultados de cada promesa.
      pokeApi.map(async (e) => {
        const infoApi=await axios.get(e.url)
        const info = infoApi.data

        return {
          id: info.id,
          name: info.name,
          types: info.types.map((e) => e.type.name),
          image: info.sprites.front_default,
          hp: info.stats[0].base_stat,
          attack: info.stats[1].base_stat,
          defense: info.stats[2].base_stat,
          speed: info.stats[5].base_stat,
          height: info.height,
          weight: info.weight,
        };
      })
    );
    return [...dataPokemon,...pokemonDb];
    //concateno ambos arreglos para juntar la info de api y db
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPokemonsById = async (idPokemon) => {
  const source = isNaN(idPokemon) ? "bd" : "api";
  if (source === "api") {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    );
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
