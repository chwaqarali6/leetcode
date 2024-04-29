/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const dictionary = {}
    while (n !== 1 && !dictionary[n]) {
        dictionary[n] = true
        const digits = n.toString().split('').map(Number)
        const squared = digits.map(digit => digit * digit)
        n = squared.reduce((sum, digit) => sum + digit, 0)
    }

    return n === 1
};