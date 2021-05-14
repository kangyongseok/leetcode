/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const b = {}
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (!b[nums[i]])  b[nums[i]] = 0;
        b[nums[i]] += 1
    }
    console.log(b)
    const keys = Object.keys(b);
    const values = Object.values(b);
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (values[i] < values[j]) {
                let temp = values[i];
                let keyTemp = keys[i];
                values[i] = values[j]
                values[j] = temp
                keys[i] = Number(keys[j])
                keys[j] = Number(keyTemp)
            }
        }
    }
    return keys.splice(0, k)
    // keys.forEach((key, i) => {
    //     console.log(b[key])
    // })
};