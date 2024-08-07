//A VARIAVEL EXPRESS RECEBE POR ATRIBUIÇAO PROPIEDADES DO MODULO EXPRESS
const express = require("express");
// A VARIAVEL controllerProduto recebe por atribuiçao os metodos que foram implementados no modulo prdutoController
const controllerProduto = require("./controllers/ProdutoController");
// routes variavel que recebe por atribuiçao os metodos Router da framework express
const routes = express.Router();

routes.get("/List", controllerProduto.List);

routes.post("/Create", controllerProduto.Create);

routes.post("/Update", controllerProduto.Update);

// routes.get('/GetOne', controllerProduto.GetOne);
routes.post("/GetOne", controllerProduto.GetOne); // MUDAMOS PARA POST

routes.delete("/Delete", controllerProduto.Delete);

module.exports = routes;
