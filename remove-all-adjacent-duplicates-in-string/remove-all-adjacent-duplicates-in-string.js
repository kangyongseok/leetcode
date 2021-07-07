/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
   const strings = [...s]
   const stack = []
   let index = 0;
    while(strings.length > 0) {
        if (stack.length === 0) {
            stack.push(strings.shift())
        }
        if (stack[index] === strings[0]) {
            stack.pop()
            strings.shift()
            if (index > 0) {
                index -= 1
            } else {
                index = 0
            }
        } else {
            stack.push(strings.shift())
            index++
        }
    }
    return stack.join('')
};