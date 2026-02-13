let nome="LORENA";
// alert('Bem vindo ao Dom -' + nome);
const  corpo = document.getElementById('corpo');
const  titulo = document.getElementById('titulo');


corpo.style.backgroundColor = '#2cdebd'
titulo.style.color = '#1a5e79';
titulo.style.fontSize = '48px';
titulo.textContent += ' ' + nome;