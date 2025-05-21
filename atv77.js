const rs = require('readline-sync');
let v = [];
for (let i = 0; i < 5; i++) v.push(parseInt(rs.question(`Número ${i+1}: `)));
let [_, segundo] = [...new Set(v)].sort((a, b) => b - a);
console.log("Segundo maior:", segundo);
