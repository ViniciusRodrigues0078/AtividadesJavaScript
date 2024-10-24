const prompt = require ('prompt-sync')();
let custo = prompt ("Qual o valor do carro que deseja comprar? ");
let imposto = custo / 20 * 9;
let percentual = custo / 4;
console.log ("O valor final do carro, aplicando os impostos " + imposto.toFixed(2) + ", e o percentual do revendedor " + )