const { connect } = require("./db");
const Logger = require("./logger");

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  async inserir() {
    try {
      const { db, client } = await connect();
      const result = await db.collection("usuarios").insertOne({
        nome: this.nome,
        email: this.email,
      });
      console.log("Usuário inserido:", result.insertedId);
      client.close();
    } catch (error) {
      Logger.log("Erro ao inserir usuários!" + error);   
    }
  }

  static async atualizar (filtro, novosDados) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("usuarios").updateMany(filtro, { $set: novosDados
      });
      console.log("Usuários atualizados: ", result.modifiedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao atualizar usuários!" + error);
    }
  }

  static async buscar(filtro={}) {
    try {
      const { db, client } = await connect();
      const usuarios = await db.collection("usuarios").find(filtro).toArray();
      console.log("Usuários encontrados!", usuarios);
      client.close();
    } catch (error) {
      Logger.log("Erro ao buscar usuários!" + error);
    }
  }

  static async deletar(filtro) {
    try {
      const { db, client } = await connect();
      const result = await db.collection("usuarios").deleteMany(filtro);
      console.log("Usuário deletado com sucesso", result.deletedCount);
      client.close();
    } catch (error) {
      Logger.log("Erro ao excluir/deletar usuários" + error);
    }
  }

}

module.exports = Usuario;
