// Last updated: 4/14/2026, 12:48:38 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let num = new Set(nums)
    let N = num.size
    let n = nums.length
    if(N !== n){
        return true
    }else{
        return false
    }
};