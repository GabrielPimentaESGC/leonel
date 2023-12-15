    function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios'));

    if (!usuariosRegistrados) {
      alert('Você não tem uma conta registada neste site, faça o registo para poder Iniciar Sessão');
      return false;
    }

    const usuario = usuariosRegistrados.find(user => user.email === email);

    if (!usuario) {
      alert('Você não tem uma conta registada neste site, faça o registo para poder Iniciar Sessão');
      return false;
    }

    if (usuario.senha !== senha) {
      alert('Senha Inválida ou Credenciais Erradas');
      return false;
    }

    //Alerta de Login (caso seja realizado com sucesso)
    alert('Login realizado com sucesso!');

    // Redirecionar para a página inicial após 2 segundos
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 2500);
  
    return true;
  }


  