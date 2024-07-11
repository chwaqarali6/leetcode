/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const anagramMap = {}
    const sortedStrs = strs.map((str) => str.split('').sort().join(''))
    sortedStrs.forEach((str, index) => {
        if (anagramMap[str]) {
            anagramMap[str].push(strs[index])
        } else {
            anagramMap[str] = [strs[index]]
        }
    })

    return Object.values(anagramMap)
};