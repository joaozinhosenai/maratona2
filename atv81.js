const rs = require('readline-sync');
let matriz = [], soma = 0;
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = parseInt(rs.question(`M[${i}][${j}]: `));
    if (i === j) soma += matriz[i][j];
  }
}
console.log("Soma diagonal principal:", soma);
