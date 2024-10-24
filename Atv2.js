const prompt = require ('prompt-sync')();
let nome = prompt ("Qual o seu nome? ");
let idade = prompt ("Qual a sua idade? ")
if (idade > 18) (
    console.log (nome + ", Você é maior de idade, entrada permitida")
);
if (idade < 18) (
    console.log (nome + ", Você é menor de idade, entrada recusada")
);