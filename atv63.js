const rs = require('readline-sync');
let num = parseInt(rs.question("Número: "));
let maior = num, menor = num;
while (num !== 0) {
  num = parseInt(rs.question("Número: "));
  if (num !== 0) {
    if (num > maior) maior = num;
    if (num < menor) menor = num;
  }
}
console.log("Maior:", maior, "Menor:", menor);
