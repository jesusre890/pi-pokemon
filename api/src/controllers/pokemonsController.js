const { Pokemon, Type } = require("../db");
const axios = require("axios");

//Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

//const getPokemons = async (name) => {
//  try {
//    if (name) {
//      //trae el primero que encuentre en la base de datos
//      const pokemonByName = await Pokemon.findOne({ where: { name } });
//      return pokemonByName;
//    }
//    const allPokemon = await Pokemon.findAll();
//    return allPokemon;
//  } catch (error) {
//    throw new Error(error.message);
//  }
//};

const getPokemonsApi = async () => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=48");

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
        //createPokemon: false
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
    //raw: true,
    include: {
      model: Type,
      atributes: ["name"],
    },
  });
  //console.log('all pokemon',allPokemonsDb);
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

const getAllPokemons=async (name) => {
  //console.log('estoy en el controller', name);
  const pokemonsDb = await getPokemonsDb();
  //console.log(getPokemonsDb);
  const pokemonsApi = await getPokemonsApi();
  const allPokemon = pokemonsDb.concat(pokemonsApi);
  //console.log(allPokemon);

  let pokemonName;
  if (name) {
    pokemonName = allPokemon.filter(
      (e) => e.name.toLowerCase().includes(name.toLowerCase()) //verifico que siempre sea la busqueda en minuscula
    );
    if (pokemonName.length) return pokemonName;
    throw new Error("No se encontro ningun pokemon con ese nombre");
  }
  return allPokemon;
};

const getPokemonsById = async (idPokemon) => {
  const all = await getAllPokemons();
  //console.log('allggggg',all);
  const byId = await all.filter((e) => String(e.id) === idPokemon);
  //console.log('byId',byId);
  //console.log(typeof idPokemon);
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
  //console.log("estoy por crear ");
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
  createPokemon,
};


