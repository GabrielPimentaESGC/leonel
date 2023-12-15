function registrar() {
    const nome = document.getElementById('nome').value;
    const apelido = document.getElementById('apelido').value;
    const data = document.getElementById('data').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    const genero = document.getElementById('genero').value;
    const nif = document.getElementById('nif').value;
    const codigoPostal = document.getElementById('codigo-postal').value;
  
    if (
      !nome ||
      !apelido ||
      !data ||
      !email ||
      !senha ||
      !confirmarSenha ||
      !genero ||
      !nif ||
      !codigoPostal
    ) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
  
    const dataNascimento = new Date(data);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
  
    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
  
    if (idade < 18) {
      alert('Você deve ter no mínimo 18 anos para se registrar.');
      return;
    }
  
    const usuario = {
      nome,
      apelido,
      data,
      email,
      senha,
      genero,
      nif,
      codigoPostal
    };
  
    let usuariosRegistrados = localStorage.getItem('usuarios');
    if (!usuariosRegistrados) {
      usuariosRegistrados = [];
    } else {
      usuariosRegistrados = JSON.parse(usuariosRegistrados);
    }
  
    usuariosRegistrados.push(usuario);
  
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  
    alert('Conta registrada com sucesso! Faça login.');
    window.location.href = 'entrar.html';
  }
  