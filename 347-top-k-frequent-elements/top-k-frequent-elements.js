/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const counts = {}
    nums.forEach((num) => counts[num] = (counts[num] || 0) + 1)
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    const results = []
    for (let i = 0; i < k; i++) results.push(sorted[i][0])

    return results
};