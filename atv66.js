const rs = require('readline-sync');
let texto = rs.question("Texto: ");
let invertido = texto.split('').reverse().join('');
console.log(texto === invertido ? "É palíndromo" : "Não é");
