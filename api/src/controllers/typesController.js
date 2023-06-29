const { Type } = require("../db");
const axios = require("axios");

const getTypesApi = async () => {
  let allTypes = [];

  const infoApi = await axios.get("https://pokeapi.co/api/v2/type");
  const resultApi = await infoApi.data.results;

  resultApi.map((e) => allTypes.push(e.name));
  //extraigo los typos y lo guardo en el arreglo types
  await Promise.all(
    allTypes.map((type) => Type.findOrCreate({ where: { name: type } }))
  );
  const typesDb = await Type.findAll();
  return typesDb;
};

module.exports = {
  getTypesApi
};
