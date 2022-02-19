/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const m = target - n;

    if (typeof map[m] === 'number') return [map[m], i];

    map[n] = i;
  }
};
