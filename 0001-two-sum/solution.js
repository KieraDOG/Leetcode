/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i ++) {
    const a = nums[i];
    const b = target - a;

    if (map[b] !== undefined) {
      return [i, map[b]];
    }

    map[a] = i;
  }
};

