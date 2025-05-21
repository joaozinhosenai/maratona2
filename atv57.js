const rs = require('readline-sync');
let N = parseInt(rs.question("Quantidade de primos: "));
let count = 0, num = 2;
while (count < N) {
  let primo = true;
  for (let i = 2; i < num; i++) if (num % i === 0) primo = false;
  if (primo) {
    console.log(num);
    count++;
  }
  num++;
}
