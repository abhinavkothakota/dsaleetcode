// Last updated: 4/14/2026, 12:48:20 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let temp = [...nums].sort((a,b)=>a-b)
    let n = temp.length
    let d = {}

    for(let i = 0 ; i <n ; i++){
        if(!(temp[i] in d)){
            d[temp[i]]=i
        }
    }
    let ret = []

    for(let num of nums){
        ret.push(d[num])
    }return ret
};