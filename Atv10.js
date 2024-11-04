const prompt = require ('prompt-sync')();
let ano = prompt ("Em que ano você nasceu? ");
let mes = prompt ("Em que mês você nasceu? ");
let dia = prompt ("Em que dia você nasceu? ");
let adia = (2024 - ano) * 365; //Válido apenas no ano de 2024
let mdia = (10 - mes) * 30; //Válido apenas no mês de Outubro
let dias = adia + mdia + (30 - dia); //Válido apenas no dia 30
console.log ("Você viveu por " + dias + " dias.");