// Last updated: 4/14/2026, 12:49:01 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n=nums.length
    for(let i = 0 ; i<n ; i++){
        for(let j = i+1 ; j<n ; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
        } 
        }
        
    }
};