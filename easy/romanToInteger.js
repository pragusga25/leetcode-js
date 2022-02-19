/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const romanStr = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (s in romanStr) return romanStr[s];

  const arr = s.split('');

  let isAdd = true;
  let result = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    if (i !== arr.length - 1) {
      const prev = arr[i + 1];
      if (romanStr[current] < romanStr[prev]) isAdd = false;
      else isAdd = true;
    }

    if (isAdd) result += romanStr[current];
    else result -= romanStr[current];
  }

  return result;
};
