let A = [[1,2],[3,4]], B = [[2,0],[1,2]];
let C = [];
if (A[0].length === B.length) {
  for (let i = 0; i < A.length; i++) {
    C[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      C[i][j] = 0;
      for (let k = 0; k < A[0].length; k++) C[i][j] += A[i][k] * B[k][j];
    }
  }
  console.log("Resultado:", C);
} else {
  console.log("Não é possível multiplicar.");
}
