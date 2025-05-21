const rs = require('readline-sync');
let vetor = [];
for (let i = 0; i < 5; i++) vetor.push(parseInt(rs.question(`Número ${i+1}: `)));
let soma = vetor.reduce((a, b) => a + b, 0);
console.log("Soma:", soma);
