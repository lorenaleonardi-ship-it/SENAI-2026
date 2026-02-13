//primeiro tipo funcao padrao
function saudacao(nome,sobrenome){
    console.log('Olá mundo!!' + nome + ' ' + sobrenome);
}
saudacao('Pedro','Darim'); //chamada da funcao

//segundo tipo - funcao anonima
const somar = function(num1,num2){
    console.log('A soma dos numeros é = ' + (num1+num2));
}
somar(25,35);
//terceiro tipo - arrow function
const subtrair = (num1, num2) => {
   console.log('A subtracao dos numeros é = ' + (num1-num2));
}
subtrair(30,50);
somar(25,35);


//terceiro tipo - arrow function
const subtrairComRetorno = (num1, num2) => {
   return num1-num2;
}
console.log('A subtracao com retorno dos numeros é = ' +subtrairComRetorno(30,50));