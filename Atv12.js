const prompt = require ('prompt-sync')();
let salario = Number(prompt("Qual o salário do funcionário?"));
let desconto = Number(salario / 100 * 11);
if (desconto > 334,29) {
    console.log ("O desconto previdenciário será de 334,29 reais.")
}
else {
    console.log ("O desconto previdenciário será de " + desconto.toFixed(2) + " reais.")
};