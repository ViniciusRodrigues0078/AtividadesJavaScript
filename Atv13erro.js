const prompt = require ('prompt-sync')();
let letra = prompt("Digite somente um caracter: ");
switch (letra) {
    case (letra = String()):
    if ("a" , "e" , "i", "o", "u", "A", "E", "I", "O", "U") {
        console.log ("Seu caracter é uma vogal")
    } else {
        console.log ("Seu caracter é uma consoante")
    };
    break;
    case (letra = Number()):
        console.log ("Seu caracter é um número")
    break;
    default:
        console.log ("Seu caracter é um símbolo")
    break;
};