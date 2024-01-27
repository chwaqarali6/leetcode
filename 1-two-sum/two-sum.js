/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let remainders = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (remainders.has(target - nums[i])) {
            return [remainders.get(target - nums[i]), i]
        } else {
            remainders.set(nums[i], i)
        }
    }

    return [];
};