const rs = require('readline-sync');
let frase = rs.question("Frase: ");
console.log("Invertida:", frase.split('').reverse().join(''));
