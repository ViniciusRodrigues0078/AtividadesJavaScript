const prompt = require ('prompt-sync')();
let renda = Number(prompt("Qual a sua renda mensal? "));
let emprs = Number(prompt("Qual o valor do empréstimo? "));
let prest = Number(prompt("Quantas prestações você deseja pagar? "));
    if (emprs > (renda * 10)) {
        console.log ("Empréstimo não pode ser concedido, valor de prestações ou do empréstimo muito alto.")
    }
    else if ((emprs / prest) > (renda * 10 / 3)) {
        console.log ("Empréstimo não pode ser concedido, valor de prestações ou do empréstimo muito alto.")
    }
    else {
        console.log ("Empréstimo pode ser concedido")
    };