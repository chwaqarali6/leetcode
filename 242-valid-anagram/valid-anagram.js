/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const dict = {}
    for (let c of s) dict[c] = (dict[c] || 0) + 1;
    for (let c of t) if (!dict[c]--) return false;

    return true
};