// criação da classe usuarioController onde foram criados os metodos especificos e as rotas especificas da classe usuario 
class UsuarioController {

//  Criação da rota usuario com o método da classe listar.
  static rotas(app) {
    app.get("/Usuario", UsuarioController.listar);
  }

//  Criação da rota usuario com o método da classe listarHome.
  static rotasHome(app) {
    app.get("/", UsuarioController.listarHome);
  }
  static listar(req, res) {
    res.send(
      "Rota ativada com get e recurso usuário: lista de usuários deve ser ordenada"
    );
  }
  static listarHome(req, res) {
    res.send("Rota ativada com get para a pagina home");
  }
}

module.exports = UsuarioController;
