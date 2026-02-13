const prompt = require("prompt-sync")();
let temCracha = prompt("Possui crachá? (true ou false)") === "true";
let estaDeUniforme = prompt("Está de uniforme? (true ou false)") === "true";
let ehMonitor = prompt("É monitor? (true ou false)") === "true";
let temCadastro = prompt("Possui cadastro prévio? (true ou false)") === "true";

if (temCracha && estaDeUniforme && ehMonitor && temCadastro) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}
