let matriz = [], soma = 0, count = 0;
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    let val = Math.floor(Math.random() * 10);
    matriz[i][j] = val;
    if ((i + j) % 2 === 0) { soma += val; count++; }
  }
}
console.log("Média nas posições pares:", soma / count);
