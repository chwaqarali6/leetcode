
var MedianFinder = function () {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    const insertionPoint = getInsertionPoint(this.arr, num)
    if (insertionPoint === 0) {
        this.arr.unshift(num)
    } else if (insertionPoint === this.arr.length) {
        this.arr.push(num)
    } else {
        this.arr.splice(insertionPoint, 0, num)
    }
};

const getInsertionPoint = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == num) return mid;
        else if (arr[mid] < num) start = mid + 1;
        else end = mid - 1;
    }

    return end + 1;
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const length = this.arr.length
    if (length % 2 === 0) {
        return (this.arr[length / 2] + this.arr[(length / 2) - 1]) / 2
    } else {
        return this.arr[Math.floor(length / 2)]
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */