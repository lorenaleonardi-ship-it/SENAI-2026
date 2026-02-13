let palavra = prompt("Digite uma palavra: ");

console.log("3 primeiras letras:", palavra.substring(0, 3));
console.log("3 últimas letras:", palavra.substring(palavra.length - 3));