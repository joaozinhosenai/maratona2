const rs = require('readline-sync');
let vetor = [];
for (let i = 0; i < 5; i++) vetor.push(parseInt(rs.question(`Número ${i+1}: `)));
let todosPares = vetor.every(n => n % 2 === 0);
console.log(todosPares ? "Todos são pares" : "Há ímpares");
