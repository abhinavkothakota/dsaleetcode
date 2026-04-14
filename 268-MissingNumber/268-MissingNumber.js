// Last updated: 4/14/2026, 12:48:35 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length 
    let sums = (n*(n+1))/2 
    let miss = 0
    for(let i =0 ; i<n ; i++){
        miss += nums[i]
    }
    return sums-miss
    
    
};