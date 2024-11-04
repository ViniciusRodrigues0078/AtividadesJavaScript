const prompt = require ('prompt-sync')();
let vendas = prompt ("Qual o valor, em vendas, que o vendedor acumulou esse mês? ");
let comissao = vendas / 20 * 5;
let valor = comissao + 1200;
console.log ("O valor total do salário do funcionário, juntando a comissão das vendas " + comissao + " será de: " + valor.toFixed(2) + " reais.");