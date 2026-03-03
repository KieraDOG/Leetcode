/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const r = s.split('').reverse()

    let last = 0
    return r.reduce((acc, current) => {
        const v = map[current]
        const t = v < last ? -v : v
        last = v

        return acc + t
    }, 0)
};
