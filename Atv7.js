const prompt = require ('prompt-sync')();
let custo = prompt ("Qual o valor do carro que deseja comprar? ");
let imposto = custo / 20 * 9;
let percentual = custo / 4;
let total = custo + imposto + percentual;
console.log ("O valor final do carro, aplicando os impostos " + imposto.toFixed(2) + ", e o percentual do revendedor " + percentual.toFixed(2) + " será de: " + total.toFixed(2) + " reais.");
