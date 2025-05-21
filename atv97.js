function inverter(s) {
    return s.length <= 1 ? s : inverter(s.slice(1)) + s[0];
  }
  console.log(inverter("felipe"));
  