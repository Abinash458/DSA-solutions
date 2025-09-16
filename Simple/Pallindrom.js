// Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  // check netagive edge case
  if (x < 0) return false;

  // copy the x value as it can be used later
  let xCopy = x;
  let rev = 0;

  while (x > 0) {
    // get the last digit of x
    let last_digit = x % 10;
    // add the last digit to rev (not mathemetically)
    rev = 10 * rev + last_digit;
    // remove the last digit from x
    x = Math.floor(x / 10);
  }

  //   check if palindrom or not
  return rev === xCopy;
}

let x = 121;
const result = isPalindrome(x);
console.log(result);
