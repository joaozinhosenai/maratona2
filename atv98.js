function menor(vetor, i = 0, menor = Infinity) {
    if (i === vetor.length) return menor;
    return menor(vetor, i + 1, Math.min(menor, vetor[i]));
  }
  console.log(menor([9, 2, 4, 1]));
  