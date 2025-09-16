function countDigit(n) {
  // corner case if n is 0
  if (n == 0) return 1;
  let count = 0;

  // corner case if n is negative number
  while (n > 0) {
    // Math.floor(10.9) => 10 always rounds down the value
    // Math.round(10.9) => 11 round the value if 10.2 -> 10 if 10.9 -> 11
    // Math.ceil(10.1) => 11 rounds up the value

    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let n = 259;
const result = countDigit(n);
console.log(result); // 3
