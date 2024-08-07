const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;
const nome = "Rômulo Henrique"
const sobrenome="Ferreira Gonçalves"
const idade=25
const profissao = "aluno"
const materias = ["css", "html", "node", "java","c++","excel"]
// Configuração do handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//criacao da rota dados
app.get("/dados", function(req,res){
res.render('dados',{nome, sobrenome , idade , profissao , materias})
})
app.listen(port, function(req, res) {
 console.log(`Servidor rodando em http://localhost:${port}`);
});