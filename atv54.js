const rs = require('readline-sync');
let base = parseInt(rs.question("Base: "));
let expoente = parseInt(rs.question("Expoente: "));
let resultado = 1;
for (let i = 0; i < expoente; i++) resultado *= base;
console.log(`${base}^${expoente} = ${resultado}`);
