/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let curr = nums.length - 1, squaredArray = new Array(nums.length)

    for (let l = 0, r = nums.length - 1; l <= r;) {
        const leftSquare = nums[l] * nums[l]
        const rightSquare = nums[r] * nums[r]

        if (leftSquare > rightSquare) {
            squaredArray[curr--] = leftSquare
            l++
        } else {
            squaredArray[curr--] = rightSquare
            r--
        }
    }

    return squaredArray
};