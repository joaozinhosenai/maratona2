let m = [[0,1,0],[1,0,0],[0,1,1]];
let res = m.map((linha, i) => linha.map((_, j) => {
  let minas = 0;
  for (let x = i-1; x <= i+1; x++)
    for (let y = j-1; y <= j+1; y++)
      if (x >= 0 && y >= 0 && x < 3 && y < 3 && (x !== i || y !== j)) minas += m[x][y];
  return minas;
}));
console.log("Resultado:", res);
