/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const parsed = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('')

    const isValid = (arr) => {
        if (arr.length <= 1) {
            return true
        } 

        if (arr.shift() === arr.pop()) {
            return isValid(arr)
        }

        return false
    }

    return isValid(parsed)
    
};
