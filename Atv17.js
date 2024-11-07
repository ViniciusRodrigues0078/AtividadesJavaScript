const prompt = require ('prompt-sync')();
vet = [ ];
ct = 1;
vet.lenght = 15;
while (ct <= 15) {
  vet [ct - 1] = Number(prompt("Digite um número aleatório: "))
  ct++;
};
const randomIndex = Math.floor(Math.random() * vet.length);
const item = vet[randomIndex];
let num = 0;
for (let i = 0; i < vet.lenght; i++) {
  if(vet[i] == item) num++;
};
console.log ("O número " + item + " aparece " + num + " vezes no código.");
