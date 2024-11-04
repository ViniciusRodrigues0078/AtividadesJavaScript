const prompt = require ('prompt-sync')();
Count = 1
Índice = [ ]
while (Count <= 31) {
     Índice[Count - 1] = Number(prompt(`Informe o índice do pluviômetro do dia ${Count} de junho: `))
Count++;
};
let md1 = (Índice [1] + Índice [2] + Índice [3] + Índice [4] + Índice [5] + Índice [6] + Índice [7] + Índice [8] + Índice [9] + Índice [10] + Índice [11] + Índice [12] + Índice [13] + Índice [14] + Índice [15]) / 15;
let md2 = (Índice [16] + Índice [17] + Índice [18] + Índice [19] + Índice [20] + Índice [21] + Índice [22] + Índice [23] + Índice [24] + Índice [25] + Índice [26] + Índice [27] + Índice [28] + Índice [29] + Índice [30]) / 15;
console.log ("A média pluviométrica da primeira quinzena de junho, em mm, é de " + md1.toFixed(2) +"; e a média da segunda quinzena de junho, em mm, é de " + md2.toFixed(2));
