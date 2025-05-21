const rs = require('readline-sync');
let soma = 0, cont = 0, num;
do {
  num = parseInt(rs.question("Número: "));
  if (num !== 0) {
    soma += num;
    cont++;
  }
} while (num !== 0);
console.log("Média:", soma / cont);
