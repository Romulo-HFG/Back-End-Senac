const server = require("express");
const app = server();
const port = 3006;

//criei as variaveis usuarioController e tarefaControler e importei os modulos com suas classes e metodos .
const usuarioController = require("./src/controller/usuarioController");
const tarefaController = require("./src/controller/tarefaController");  

//Estou ultilizando as variaveis acessando os metodos diretos da classe sem ter que instancia-las

usuarioController.rotas(app);
usuarioController.rotasHome(app);
tarefaController.rotas(app);

app.get("/", function (req, res) {
  res.end(`pagina home`);
});
app.listen(port, function (req, res) {
  console.log(`servidor rodando na porta localhost:${port}`);
});
