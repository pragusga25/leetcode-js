/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x < 10) return true;

  let n = x;
  let m = 0;

  while (n > 0) {
    m = m * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return m === x;
};
