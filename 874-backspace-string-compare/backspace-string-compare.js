/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let sPointer = s.length - 1, tPointer = t.length - 1

    while (sPointer >= 0 || tPointer >= 0) {
        sPointer = getValidChar(s, sPointer)
        tPointer = getValidChar(t, tPointer)

        if (sPointer < 0 && tPointer < 0) return true
        if (s[sPointer] !== t[tPointer]) return false
        if (sPointer < 0 || tPointer < 0) return false

        sPointer = sPointer - 1
        tPointer = tPointer - 1
    }

    return true
};

function getValidChar(str, curr) {
    let backspaceCount = 0
    while (curr >= 0) {
        if (str[curr] === '#') backspaceCount++
        else if (backspaceCount > 0) backspaceCount--
        else break

        curr -= 1
    }

    return curr
}