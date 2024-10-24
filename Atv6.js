const prompt = require ('prompt-sync')();
let idade = prompt ("Qual a sua idade? ");
if (idade < 16) (
    console.log ("Você não é eleitor.")
);
if (idade >= 16 && idade < 18) (
    console.log ("Você é eleitor facultativo.")
);
if (idade >= 18 && idade < 65) (
    console.log ("Você é eleitor obrigatório.")
);
if (idade >= 65) (
    console.log ("Você é eleitor facultativo.")
);