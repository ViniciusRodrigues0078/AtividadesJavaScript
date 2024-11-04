const prompt = require ('prompt-sync')();
let A = 5000000;
let B = 7000000;
while (A < B) {
    console.log ("\nA cidade A tem " + A + " habitantes.");
    console.log ("\nA cidade B tem " + B + " habitantes.");
A = A + (A / 100 * 3);
B = B + (B / 50);
};
console.log ("A cidade A tem " + A.toFixed(0) + " habitantes.");
console.log ("A cidade B tem " + B.toFixed(0) + " habitantes.");