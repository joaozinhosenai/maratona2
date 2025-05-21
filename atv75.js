const rs = require('readline-sync');
let vetor = [];
for (let i = 0; i < 5; i++) vetor.push(parseInt(rs.question(`Número ${i+1}: `)));
let crescente = vetor.every((v, i, a) => i === 0 || a[i] >= a[i - 1]);
console.log(crescente ? "Está em ordem crescente" : "Não está");
