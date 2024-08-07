const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");
//Na importação deste modelo irá criar a tabela
//caso ela nao exista se tiver postMessage.sync({fonce:true})
//ele irá deletar a tabela e criar outra vez.
const postagem = require("./models/post.js");
const port = 3005;
//configurar passagem do metodo post pelo proprio express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//configura o handlebars
//template engine
layoutsDir: __dirname + "/views/layouts";
//abaixo  foi dada a permissão de acesso ao handlebars para
//vizualizar dados do servidor de dados
//inclusive apresentar os dados no template engine do handlebars
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowedProtoMethodsByDefault: true,
      allowProtoMethodsbyDefault: true,
    },
  })
);
//criaçao da rota de formulario que esta sendo rendenizada com
//o arquivo dormulario.handlebars
app.get("/formulario", function (req, res) {
  res.render("layouts/formulario");
});
app.get("/editar", function (req, res) {
  res.render("layouts/editar");
});
app.post("/atualizar", function (req, res) {
  // id= req.body.id
  const idPost = req.body.id;
  //postagem e a variavel que alem de realizar a conexão com
  //banco de dados, criou a entidade que ira atualizar dados na tabela
  postagem.update(
    {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
    },
    { where: { id: idPost } }
  ),
    then(function () {
      res.send("Atualizado com sucesso");
    }).catch(function (erro) {
      res.send("Arquivo não atualizado");
    });
});

app.get("/listar", function (res, req) {
  postagem.allowMethods;
  postagem.findAll().then(function (posts) {
    res.render("layouts/listar", { p: post });
  });
});

app.get("/home", function (req, res) {
  res.render("layouts/home");
});

app.post("/salvar", function (req, res) {
  postagem.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  }) .then(function(){
    res.send("criado com sucesso")
    .catch(function(erro){
      res.send("houve um erro" + erro);
    })
  })
  });

  app.set('view engine', 'handlebars')

  app.listen(port, function(){
    console.log(`Servidor rodando na porta localhost:${port}`)
  })