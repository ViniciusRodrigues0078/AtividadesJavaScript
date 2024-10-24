const prompt = require('prompt-sync')();
let real = prompt("Qual o valor, em R$, que deseja converter? ");
let conversao = real / 5.5;
console.log ("O valor, após convertido para dólar será de US$" + conversao.toFixed (2));