const rs = require('readline-sync');
let vetor = [];
for (let i = 0; i < 5; i++) vetor.push(parseInt(rs.question(`Número ${i+1}: `)));
console.log("Invertido:", vetor.reverse());
