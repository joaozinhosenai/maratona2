const rs = require('readline-sync');
let soma = 0, num;
do {
  num = parseInt(rs.question("Número: "));
  if (num >= 0) soma += num;
} while (num >= 0);
console.log("Soma:", soma);
