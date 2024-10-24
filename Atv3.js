const prompt = require ('prompt-sync')();
let emprestimo = prompt ("Qual o valor do empréstimo desejado (R$)? ");
let salario = prompt ("Qual o valor do seu salário (R$)? ");
let prestacao = prompt ("Quando você deseja pagar por prestação (R$)? ");
if (prestacao > (salario / 5)) (
    console.log ("Empréstimo não pode ser concedido.")
)
else (
    console.log ("Empréstimo pode ser concedido.")
);