const rs = require('readline-sync');
let m1 = [], m2 = [], soma = [];
for (let i = 0; i < 2; i++) {
  m1[i] = [], m2[i] = [], soma[i] = [];
  for (let j = 0; j < 2; j++) {
    m1[i][j] = parseInt(rs.question(`M1[${i}][${j}]: `));
    m2[i][j] = parseInt(rs.question(`M2[${i}][${j}]: `));
    soma[i][j] = m1[i][j] + m2[i][j];
  }
}
console.log("Soma:", soma);
