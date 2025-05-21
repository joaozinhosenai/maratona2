const rs = require('readline-sync');
let cpf = rs.question("CPF (apenas números): ");
console.log(cpf.length === 11 ? "Formato válido" : "Formato inválido");
