/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverseArray = function (nums, start, end) {
    for (let i = start, j = end; i < j; i++, j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
}

var rotate = function (nums, k) {
    const rotations = k % nums.length
    reverseArray(nums, 0, nums.length - 1)
    reverseArray(nums, 0, rotations - 1)
    reverseArray(nums, rotations, nums.length - 1)
};