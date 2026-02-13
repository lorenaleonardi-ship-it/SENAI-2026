let hoje = new Date();
let fimDoAno = new Date(2025, 11, 31);

let dias = (fimDoAno - hoje) / 86400000;
console.log("Dias até o fim do ano:", Math.round(dias));