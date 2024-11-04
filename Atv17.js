const prompt = require ('prompt-sync')();
vet = [ ]
ct = 1
while (ct <= 15) {
  vet [ct - 1] = Number(prompt("Digite um número: "))
  ct++;
};
let num = vet.toSorted();
let vz = vet.filter (num);
console.log ("O número " + num + " aparece " + vz + " no código.");
