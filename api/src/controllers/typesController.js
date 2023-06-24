const { Type } = require("../db");
const axios = require("axios");

getTypesApi = async () => {
  const infoApi = await axios.get("https://pokeapi.co/api/v2/type/");
  const resultApi = await infoApi.data.results;

  let types = resultApi.map((e) => e.name);
  //extraigo los typos y lo guardo en el arreglo types
  await Promise.all(
    types.map((e) => Type.findOrCreate({ where: { name: e }}))
  );
  const typesDb = await Type.findAll();
  return typesDb;
};

module.exports = {
  getTypesApi,
};

