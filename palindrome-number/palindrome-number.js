/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let start = 0;
    let end = String(x).length - 1;
    let data = [...String(x)];
    while(start < end) {
        let temp = data[start]
        data[start] = data[end];
        data[end] = temp
        start++
        end--
    }
    return data.join('') === String(x)
};