/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const dictionary = {}

    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (dictionary[ch]) dictionary[ch] += 1
        else dictionary[ch] = 1
    }

    for (let i = 0; i < t.length; i++) {
        const ch = t[i]
        if (dictionary[ch]) dictionary[ch] -= 1
        else return false
    }

    return true
};