let m = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)));
let t = m[0].map((_, i) => m.map(row => row[i]));
console.log("Original:", m, "Transposta:", t);
