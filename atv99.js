function palindromo(s) {
    if (s.length <= 1) return true;
    if (s[0] !== s[s.length - 1]) return false;
    return palindromo(s.slice(1, -1));
  }
  console.log(palindromo("ana"));
  