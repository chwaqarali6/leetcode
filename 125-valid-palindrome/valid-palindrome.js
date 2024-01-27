/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const stringArray = s.split("")

    for (let i = 0, j = s.length - 1; i < j;) {
        if (!(/[a-zA-Z0-9]/).test(s[i])) {
            i++;
        } else if (!(/[a-zA-Z0-9]/).test(s[j])) {
            j--;
        } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true
};