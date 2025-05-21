const rs = require('readline-sync');
let N = parseInt(rs.question("Número: "));
for (let i = 2; i < N; i++) {
  let primo = true;
  for (let j = 2; j < i; j++) if (i % j === 0) primo = false;
  if (primo) console.log(i);
}
