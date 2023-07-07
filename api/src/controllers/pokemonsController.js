const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getPokemonsApi = async () => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=200");

    const pokeApi = await api.data.results; //guardo la info en una constante para luego mapear y modificar segun la info de la url

    const dataPokemon = pokeApi.map(async (pokemon) => {
      const info = await axios.get(pokemon.url);
      const i = info.data;
      return {
        id: i.id,
        name: i.name,
        types: i.types.map((e) => e.type.name),
        image: i.sprites.other.home.front_default,
        hp: i.stats[0].base_stat,
        attack: i.stats[1].base_stat,
        defense: i.stats[2].base_stat,
        speed: i.stats[5].base_stat,
        height: i.height,
        weight: i.weight,
      };
    });

    const getAllPokemon = await Promise.all(dataPokemon);
    return getAllPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPokemonsDb = async () => {
  const allPokemonsDb = await Pokemon.findAll({
    //busco en la tabla los modelos que necesito
    include: {
      model: Type,
      atributes: ["name"],
    },
  });
  const mapPoke = allPokemonsDb.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      types: e.Types.map((e) => e.name),
      hp: e.hp,
      attack: e.attack,
      defense: e.defense,
      speed: e.speed,
      height: e.height,
      weight: e.weight,
      createdInDb: e.createdInDb,
    };
  });
  return mapPoke;
};

const getAllPokemons = async (name) => {
  //console.log('estoy en el controller', name);
  const pokemonsDb = await getPokemonsDb();
  const pokemonsApi = await getPokemonsApi();
  const allPokemon = pokemonsDb.concat(pokemonsApi);

  let pokemonName;
  if (name) {
    pokemonName = allPokemon.filter(
      (e) => e.name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokemonName.length) return pokemonName;
    throw new Error("No se encontro ningun pokemon con ese nombre");
  }
  return allPokemon;
};

const getPokemonsById = async (idPokemon) => {
  const all = await getAllPokemons();
  const byId = await all.filter((e) => String(e.id) === idPokemon);
  if (byId.length) {
    return byId;
  } else {
    throw new Error(`Pokemon no encontrado, id: ${idPokemon} incorrecto`);
  }
};

const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed = null,
  height = null,
  weight = null,
  createdInDb,
  types
) => {
  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name },
    defaults: {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      createdInDb,
    },
  });
  if (!created) throw new Error("Este pokemon ya existe en la DB");
  const typesDb = await Type.findAll({ where: { name: types } });

  pokemon.addTypes(typesDb);

  return pokemon;
};

module.exports = {
  getPokemonsApi,
  getPokemonsDb,
  getAllPokemons,
  getPokemonsById,
  createPokemon
};
