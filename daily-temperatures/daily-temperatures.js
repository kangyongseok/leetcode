/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = []
    for (let i = 0; i < temperatures.length; i++) {
        if (i === temperatures.length - 1) {
            result.push(0)
        }
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                result.push(j - i)
                break;
            }
            if (temperatures.length - 1 === j) {
               result.push(0)
            }
        }
    }
    return result
};