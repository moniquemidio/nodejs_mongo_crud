const Usuario = require("./usuario");

async function executar() {

  const user = new Usuario("Monique", "monique@email.com");
  //await user.inserir();

  //await Usuario.buscar();

  //await Usuario.atualizar({nome: "Monique"}, {email:"monique@gmail.com"});

  //await Usuario.deletar({nome: "Monique"}, {email:"monique@gmail.com"});

}

executar();