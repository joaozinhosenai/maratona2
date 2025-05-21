let m = [], linha = [], coluna = Array(4).fill(0);
for (let i = 0; i < 4; i++) {
  m[i] = [];
  linha[i] = 0;
  for (let j = 0; j < 4; j++) {
    let val = Math.floor(Math.random() * 10);
    m[i][j] = val;
    linha[i] += val;
    coluna[j] += val;
  }
}
console.log("Matriz:", m, "Soma Linhas:", linha, "Soma Colunas:", coluna);
