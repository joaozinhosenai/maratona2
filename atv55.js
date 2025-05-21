const rs = require('readline-sync');
let N = parseInt(rs.question("Número: "));
let primo = N > 1;
for (let i = 2; i < N; i++) if (N % i === 0) primo = false;
console.log(primo ? "É primo" : "Não é primo");
