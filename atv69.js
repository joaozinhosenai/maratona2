const rs = require('readline-sync');
let a = parseInt(rs.question("A: "));
let b = parseInt(rs.question("B: "));
while (b !== 0) [a, b] = [b, a % b];
console.log("MDC:", a);
