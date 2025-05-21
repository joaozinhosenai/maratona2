let matriz = [], maior = -Infinity, pos = [0, 0];
for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    let val = Math.floor(Math.random() * 100);
    matriz[i][j] = val;
    if (val > maior) { maior = val; pos = [i, j]; }
  }
}
console.log("Maior:", maior, "Posição:", pos);
