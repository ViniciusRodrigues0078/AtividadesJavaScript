const prompt = require ('prompt-sync')();
vet = [ ];
ct = 1;
while (ct <= 15) {
  vet [ct - 1] = Number(prompt("Digite um número aleatório: "))
  ct++;
};
let min = Math.min(...vet);
let max = Math.max(...vet);
const grn = (min, max) => {
  return Math.random() * (max - min) + min
};
//falta programar o número de vezes que o número aleatório aparece
vet.forEach(grn => {
  let rn = grn + 1 - 1
});
console.log ("O número " + grn + " aparece " + rn + " vezes no código.");
