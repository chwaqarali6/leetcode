/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slowPointer = nums.findIndex((num) => num === 0)

    if (slowPointer >= 0) {
        for (let fastPointer = slowPointer + 1; fastPointer < nums.length; fastPointer++) {
            if (nums[fastPointer] !== 0) {
                nums[slowPointer++] = nums[fastPointer]
                nums[fastPointer] = 0
            }
        }
    }
};