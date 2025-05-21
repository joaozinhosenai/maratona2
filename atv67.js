const rs = require('readline-sync');
let N = parseInt(rs.question("Número: "));
for (let i = 1; i <= N; i++) if (N % i === 0) console.log(i);
