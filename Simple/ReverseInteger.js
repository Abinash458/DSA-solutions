// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverseInteger(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;

  while (x > 0) {
    let last_digit = x % 10;
    rev = 10 * rev + last_digit;

    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  return xCopy < 0 ? -rev : rev;
}

let x = 123;
const result = reverseInteger(x);
console.log(result);
