// Last updated: 4/14/2026, 12:48:29 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length
    let count = new Array(0)
    let num = new Set(nums)

    for(let i = 1 ; i<n+1 ; i++){
        if (!num.has(i) ){
            count.push(i)
        }
    }return count
};