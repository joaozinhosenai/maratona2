const rs = require('readline-sync');
let v1 = [], v2 = [], mult = [];
for (let i = 0; i < 5; i++) v1.push(parseInt(rs.question(`V1[${i}]: `)));
for (let i = 0; i < 5; i++) v2.push(parseInt(rs.question(`V2[${i}]: `)));
for (let i = 0; i < 5; i++) mult.push(v1[i] * v2[i]);
console.log("Multiplicação:", mult);
