const prompt = require ('prompt-sync')();
let num = prompt ("Escreva um número: ")
if (num % 10 == 0) (
console.log ("Seu número é divisível por 10")
)
else (
    console.log ("Seu número não é divisível por 10")
);
if (num % 5 == 0) (
console.log ("Seu número é divisível por 5")
)
else (
    console.log ("Seu número não é divisível por 5")
);
if (num % 2 == 0) (
console.log ("Seu número é divisível por 2")
)
else (
    console.log ("Seu número não é divisível por 2")
);