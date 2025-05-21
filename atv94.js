function somaDigitos(n) {
    return n < 10 ? n : n % 10 + somaDigitos(Math.floor(n / 10));
  }
  console.log(somaDigitos(123));
  