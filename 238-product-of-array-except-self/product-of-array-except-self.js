/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const prefix = [1]
    const suffix = [1]
    const result = []

    for (let i = 1, prod = 1; i < nums.length; i++) {
        prod *= nums[i - 1]
        prefix.push(prod)
    }

    for (let i = nums.length - 2, prod = 1; i >= 0; i--) {
        prod *= nums[i + 1]
        suffix.push(prod)
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(prefix[i] * suffix[nums.length - 1 - i])
    }

    return result
};