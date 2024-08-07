class TarefaController{
  // criação da classe TarefaController onde foram criados os metodos especificos e as rotas especificas da classe tarefa

  //crição da rota tarefa
  static rotas(app){
    app.get('/tarefa', TarefaController.listar);
  }
  //crição do metodo listar da rota tarefa
  static listar(req, res){
  res.send('Rota ativada com get e recurso tarefa: lista de tarefas deve ser retornada.')
  }
  static rotasHome(app){
    app.get('/', TarefaController.listarHomer);
  }
  static listarHome(req, res){
    res.send('Rota ativada para a pagina home');
  }
}

module.exports = TarefaController