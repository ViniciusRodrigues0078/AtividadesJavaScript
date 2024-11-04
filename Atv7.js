const prompt = require ('prompt-sync')();
let custo = Number(prompt ("Qual o valor do carro que deseja comprar? "));
let imposto = Number(custo / 20 * 9);
let percentual = Number(custo / 4);
let total = Number(custo + imposto + percentual);
console.log ("O valor final do carro, aplicando os impostos " + imposto.toFixed(2) + ", e o percentual do revendedor " + percentual.toFixed(2) + " será de: " + total.toFixed(2) + " reais.");
