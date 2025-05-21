function primo(n, i = 2) {
    if (n <= 2) return n === 2;
    if (n % i === 0) return false;
    if (i * i > n) return true;
    return primo(n, i + 1);
  }
  console.log(primo(17));
  