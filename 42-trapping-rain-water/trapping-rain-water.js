/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const maxIndex = height.indexOf(Math.max(...height))
    const uphill = height.slice(0, maxIndex + 1)
    const downhill = height.slice(maxIndex).reverse()

    return getTrappedWater(uphill) + getTrappedWater(downhill)
};

const getTrappedWater = (height) => {
    let l = 0, r = 1, trappedWater = 0

    while (r < height.length) {
        if (height[l] <= height[l + 1]) r = ++l + 1
        else if (height[l] > height[r]) r++
        else {
            let water = 0
            for (let k = l + 1; k < r; k++) water += height[l] - height[k]
            trappedWater += water
            l = r++
        }
    }

    return trappedWater
}