const prompt = require ('prompt-sync')();
let vel = prompt("Qual a velocidade (m/s) que deseja converter? ")
console.log ("A velocidade " + vel + ", em Km/h será de " + vel * 3.6);