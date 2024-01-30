/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let sPointer = s.length, tPointer = t.length

    while (sPointer >= 0 && tPointer >= 0) {
        sPointer = getValidChar(s, sPointer - 1)
        tPointer = getValidChar(t, tPointer - 1)

        if (s[sPointer] !== t[tPointer]) return false
    }

    return !(sPointer > 0 || tPointer > 0)
};

function getValidChar(str, curr) {
    let backspaceCount = 0

    for (; curr >= 0; curr--) {
        if (str[curr] === '#') backspaceCount++
        else if (backspaceCount > 0) backspaceCount--
        else return curr
    }

    return curr
}