const prompt = require ('prompt-sync')();
let valor = 280000 - 2500;
let parcelas = valor / 65;
let juros = parcelas * 12 / 50 * 6;
let total = valor + (juros * 5);
let pfinal = parcelas + (juros * 5);
console.log ("O total pago por Paulo será de R$" + total.toFixed(2));
console.log ("E a última parcela custará R$" + pfinal.toFixed(2));