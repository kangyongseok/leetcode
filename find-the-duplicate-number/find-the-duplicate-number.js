/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   //1.  for (let i = 0; i < nums.length; i++) {
   //      for (let j = i + 1; j < nums.length; j++) {
   //          if (nums[i] === nums[j]) return nums[i]
   //      }
   // }
    
    //2.  return nums.find((num, i) => nums.indexOf(num) !== i)
    
    let indexJump = nums[0];
    let numJump = nums[0];
    
    do {
        indexJump = nums[indexJump]
        numJump = nums[nums[numJump]]
    } while (indexJump !== numJump) {
        indexJump = nums[0]
        
        while (indexJump !== numJump) {
            console.log(indexJump, numJump)
            indexJump = nums[indexJump];
            numJump = nums[numJump];
        }
        
        return numJump
    }
    
};