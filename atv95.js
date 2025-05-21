function pot(base, exp) {
    return exp === 0 ? 1 : base * pot(base, exp - 1);
  }
  console.log(pot(2, 4));
  