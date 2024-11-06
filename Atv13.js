const prompt = require ('prompt-sync')();
let letra = prompt("Digite somente um caracter: ");
    if (letra == "b" || letra == "c" || letra == "d" || letra == "f" || letra == "g" || letra == "h" || letra == "j" || letra == "k" || letra == "l" || letra == "m" || letra == "n" || letra == "p" || letra == "q" || letra == "r" || letra == "s" || letra == "t" || letra == "v" || letra == "w" || letra == "x" || letra == "y" || letra == "z" || letra == "B" || letra == "C" || letra == "D" || letra == "F" || letra == "G" || letra == "H" || letra == "J" || letra == "K" || letra == "L" || letra == "M" || letra == "N" || letra == "P" || letra == "Q" || letra == "R" || letra == "S" || letra == "T" || letra == "V" || letra == "W" || letra == "X" || letra == "Y" || letra == "Z") {
        console.log ("Seu caracter é uma consoante")
    }
    else  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        console.log ("Seu caracter é uma vogal")
    }         
    else if (letra == "0" || letra == "1" || letra == "2" || letra == "3" || letra == "4" || letra == "5" || letra == "6" || letra == "7" || letra == "8" || letra == "9") {
        console.log ("Seu caracter é um número")
    }
    else {
        console.log ("Seu caracter é um símbolo")
    };
