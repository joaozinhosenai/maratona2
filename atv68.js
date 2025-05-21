const rs = require('readline-sync');
let a = parseInt(rs.question("A: "));
let b = parseInt(rs.question("B: "));
let max = a * b;
for (let i = 1; i <= max; i++) if (i % a === 0 && i % b === 0) {
  console.log("MMC:", i); break;
}
