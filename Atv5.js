const prompt = require ('prompt-sync')();
let peso = prompt ("Qual o seu peso (KG)? ");
let altura = prompt ("Qual a sua altura (M)? ");
let imc = peso / (altura * altura);
if (imc < 20) (
console.log ("Você está abaixo do peso ideal.")
);
if (imc >= 20 && imc < 25) (
console.log ("Você está com o peso normal.")
);
if (imc >= 25 && imc < 30) (
console.log ("Você está sobrepeso.")
);
if (imc >= 30 && imc < 40) (
console.log ("Você está obeso.")
);
if (imc >= 40) (
console.log ("Você é obeso mórbido.")
);