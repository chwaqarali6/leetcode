/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maximumArea = 0

    for (let i = 0, j = height.length; i < j; height[i] < height[j] ? i++ : j--) {
        const area = (j - i) * Math.min(height[i], height[j])
        if (area > maximumArea) {
            maximumArea = area
        }
    }

    return maximumArea
};