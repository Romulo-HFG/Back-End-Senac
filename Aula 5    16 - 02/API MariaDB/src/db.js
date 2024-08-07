//a variavel sequelize recebe todas as propriedades do modulo sequelize
const sequelize = require('sequelize');
//A variavel ("objeto") database e instanciado pela palavra reservada new
//que ira passar todas as propriedades do modulo para o objeto database
//na passagem de parametro segue a ordem
// 1.nome do banco, 2. usuario, 3. senha do banco,
// e um objeto com local e tecnologia do banco de dados.
const database = new sequelize('armazem','root','',
{
 host:"localhost",
 dialect:'mariadb'
});
//sync é o método sincronizador que fará a conexão com o banco de dados
database.sync();
//abaixo eu realizo a exportaçao desse modulo para serr ultilizado em outra
// parte da aplicaçao 
module.exports = database;