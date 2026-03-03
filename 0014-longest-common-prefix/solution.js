/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = strs.shift()

    strs.forEach((str) => {
        while (!str.startsWith(commonPrefix)) {
            commonPrefix = commonPrefix.slice(0, -1)

            if (!commonPrefix) {
                return
            }
        }
    })

    return commonPrefix
};
