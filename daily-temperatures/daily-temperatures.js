/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const result = Array.from({length: temperatures.length}, () => 0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop()
            result[j] = i - j
        }
        stack.push(i)
    }
    console.log(result)
    // for (let i = 0; i < temperatures.length; i++) {
    //     if (i === temperatures.length - 1) {
    //         result.push(0)
    //     }
    //     for (let j = i + 1; j < temperatures.length; j++) {
    //         if (temperatures[i] < temperatures[j]) {
    //             result.push(j - i)
    //             break;
    //         }
    //         if (temperatures.length - 1 === j) {
    //            result.push(0)
    //         }
    //     }
    // }
    return result
};