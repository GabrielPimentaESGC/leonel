const header = document.getElementById('header'); // Substitua 'header' pelo ID do seu elemento
if (header) {
  header.innerText = 'Login efetuado com sucesso!';
  header.style.backgroundColor = 'green';

  setTimeout(function() {
    header.innerText = '';
    header.style.backgroundColor = 'transparent';
  }, 2500);
}