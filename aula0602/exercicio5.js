const prompt = require("prompt-sync")();

let anoNascimento = prompt("Digite seu ano de nascimento: ");
let anoAtual = new Date().getFullYear();

console.log("Idade:", anoAtual - anoNascimento);