//vARIAVEL SEQUELIZA POR ATRIBUIÇAO RECEBE OS METODOS DA ORM SEQUELIZEE

const sequelize = require('sequelize');

//A VARIAVEL DATABASE IMPORTA A CONEXAO COM O BANCO DE DADOS DO ARQUIVO DB.TS

const database = require('../db');

//VARIAVEL SHEMA PARA RECEBE OBJETOS PARA CONSTRUÇAO DO BANCO DE DADOS

const shema = "";

//CRIAÇAO DA CLASSE PRODUTO PARA SER IMPLEMENTADA A TABELA PRODUTO NO BANCO DE DADOS ARMAZEM 

class Produto extends sequelize.Model { }

//SEQUELIZE.MODEL { } => PASSA SEUS METODOS PARA A CLASSE PRODUTO POR MEIO DE HERANÇA

//PRODUTO INIT SINTAXE DA ORM PARA CRIAÇAO DA MINHA ENTIDADE
Produto.init(
 {
 Codigo: // ATRIBUTO DA TABELA
 {
 type: sequelize.INTEGER, // TIPO DE DADO QUE SERA O CODIGO NUMERICO
 autoIncrement: true, // AUTO INCREMENT A CADA REGISTRO GERA AUTOMATICO
 allowNull: false, // OBRIGATORIEDADE PARA SER REGISTRADO NO BANCO DE DADOS
 primaryKey: true  // DEFINIDO COMO CHAVE PRIMARIA
 },
 Descricao:
 {
 type: sequelize.STRING, // TIPO DE DADO VARCHAR
 allowNull: true,
 },
 DataCriacao:
 {
 type: sequelize.DATE, // TIPO DE DADO DATA
 allowNull: false,
 },
 DataAtualizacao:
 {
 type: sequelize.DATE,
 allowNull: true,
 }
 },
 {

  //VARIAVEL SEQUELIZE RECEBE CONEXAO XOM O BANCO DE DADOS POR MEIO DA VARIAVEL DATABASE 
  //  modelName NOME DA TABELA
 sequelize: database, modelName: 'tbProduto', shema
 }
)
module.exports = Produto;