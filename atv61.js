const rs = require('readline-sync');
let N = parseInt(rs.question("Limite: "));
let a = 0, b = 1;
while (a <= N) {
  console.log(a);
  [a, b] = [b, a + b];
}
