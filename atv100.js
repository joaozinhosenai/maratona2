function soma(v, i = 0) {
    return i >= v.length ? 0 : v[i] + soma(v, i + 1);
  }
  console.log(soma([1, 2, 3, 4, 5]));
  