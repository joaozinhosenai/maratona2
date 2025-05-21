const rs = require('readline-sync');
let A = parseInt(rs.question("A: "));
let B = parseInt(rs.question("B: "));
for (let i = A + 1; i < B; i++) console.log(i);
