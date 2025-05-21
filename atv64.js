const rs = require('readline-sync');
let frase = rs.question("Frase: ").toLowerCase();
let vogais = 0;
for (let letra of frase) if ("aeiou".includes(letra)) vogais++;
console.log("Vogais:", vogais);
