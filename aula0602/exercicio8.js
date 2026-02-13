let numeroUsuario = prompt("Digite um número: ");
let numeroAleatorio = Math.round(Math.random() * 10);

if (numeroUsuario == numeroAleatorio) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}
