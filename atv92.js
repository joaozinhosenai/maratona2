function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  for (let i = 0; i < 10; i++) console.log(fib(i));
  