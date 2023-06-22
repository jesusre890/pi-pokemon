const { Router } = require("express");
const {getTypesHandler}=require("../handlers/typesHandlers");
const routerTy = Router();

routerTy.get("/", getTypesHandler);

module.exports = routerTy