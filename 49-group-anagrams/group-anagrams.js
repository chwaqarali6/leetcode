/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const buckets = {}
    strs.forEach((str, index) => {
        const sorted = str.split('').sort().join('')
        buckets[sorted] ? buckets[sorted].push(str) : buckets[sorted] = [str]
    })

    return Object.values(buckets)
};