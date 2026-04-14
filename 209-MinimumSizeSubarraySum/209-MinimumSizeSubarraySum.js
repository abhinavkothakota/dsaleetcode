// Last updated: 4/14/2026, 12:48:41 PM
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l =0
    let result=Infinity
    let total = 0
    let n = nums.length
    for(let r = 0 ; r<=n ; r++ ){
        total +=nums[r]

        while(total >= target){
            result = Math.min(result,r-l+1)
            total -=nums[l]
            l++
        }

    }
    if(result===Infinity) return 0
    else{
        return result
    }

};
//abhi