let m = [[1,0,0],[0,2,0],[0,0,3]];
let diagonal = true;
for (let i = 0; i < 3; i++)
  for (let j = 0; j < 3; j++)
    if (i !== j && m[i][j] !== 0) diagonal = false;
console.log(diagonal ? "É diagonal" : "Não é");
