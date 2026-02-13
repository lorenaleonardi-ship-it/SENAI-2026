let prompt = require('prompt-sync')();
let idade = prompt("Digite a idade do usuario: ");
if (idade >= 18) {
    console.log("Você é maior de idade e pode pegar livros emprestados.");
} else if (idade >= 16) {
    console.log("Você tem idade suficiente para pegar livros emprestados.");
} else {
    console.log("Você não tem idade suficiente para pegar livros emprestados.");
}
