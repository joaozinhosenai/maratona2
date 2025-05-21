function mdc(a, b) {
    return b === 0 ? a : mdc(b, a % b);
  }
  console.log(mdc(20, 8));
  