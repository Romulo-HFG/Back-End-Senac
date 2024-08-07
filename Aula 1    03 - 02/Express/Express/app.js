const express = require('express')
const port = 2023
const app = express()
const handlebars = require("express-handlebars")
const nome = "Rômulo Henrique"
const sobrenome = "Ferreira Gonçalves"
const profissao = "aluno"
const idade = 25

app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
app.get("/:nome", function(req, res){
res.send("O nome informado foi " + req.params.nome)
})


app.get('/blog', function(req, res){
  res.send("Minha pagina blog")
  })

  app.get('/sobre', function(req, res){
    res.send("Minha pagina sobre")
    })

    app.get("/dados",function(){
      res.render('dados',(nome,sobrenome,idade,profissao))
    })
app.listen(port, function(){

  console.log(`O servidor esta rodando no http://localhost:${port}`)

})