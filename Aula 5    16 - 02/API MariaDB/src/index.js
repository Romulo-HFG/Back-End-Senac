// const Express = require('express')
// const app = Express()
// const port = 4200

// app.get('/', function (req, res) {
//   res.end('Minha pagina principal')
// })

// app.listen(port,function(){
//   console.log(`servidor rodando em localhost://${port}`)
  
// })
//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//

// Importa o módulo express
const express = require('express');
// Inicializa o aplicativo Express
const api = express();
// Importa o arquivo de rotas
const routes = require('./router');
// Importa o módulo CORS
const cors = require('cors');
// Usa o middleware CORS
api.use(cors());
// Usa o middleware para analisar solicitações JSON
api.use(express.json());
// Usa o arquivo de rotas
api.use(routes);
// Inicia o servidor para escutar na porta 4100
api.listen(4100);
