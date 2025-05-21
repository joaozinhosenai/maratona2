const rs = require('readline-sync');
let N = parseInt(rs.question("Digite um número: "));
let soma = 0;
for (let i = 1; i <= N; i++) soma += i;
console.log("Soma:", soma);
