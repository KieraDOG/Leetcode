/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = x.toString().split('')


    while(true) {
        if (arr.length <= 1) {
            return true
        }

        const a = arr.pop()
        const b = arr.shift()

        if (a === b) {
            continue
        }

        return false
    }
};
