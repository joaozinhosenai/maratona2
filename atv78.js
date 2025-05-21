const rs = require('readline-sync');
let v = [];
for (let i = 0; i < 5; i++) v.push(parseInt(rs.question(`Número ${i+1}: `)));
let num = parseInt(rs.question("Número para contar: "));
let vezes = v.filter(x => x === num).length;
console.log(`Aparece ${vezes} vezes`);
