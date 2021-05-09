/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    strs.forEach((str, i) => {
        const a = str.split("").sort().join("");
        map[a] ? map[a].push(str) : map[a] = [str]
    });
    return Object.values(map)
};