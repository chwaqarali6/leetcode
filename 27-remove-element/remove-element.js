/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = nums.length
    let slow = nums.length - 1, fast = slow

    while (fast >= 0) {
        if (nums[slow] === val) --k, --slow
        else if (nums[fast] === val) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            --k, --slow
        }

        --fast
    }

    return k
};