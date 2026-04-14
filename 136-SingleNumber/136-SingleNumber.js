// Last updated: 4/14/2026, 12:48:49 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const dic = {}
    let n = nums.length
    if (n === 0) return null

    for (const num of nums) {
        dic[num] = (dic[num] || 0) + 1
    }

    for (const key of Object.keys(dic)) {
        if (dic[key] === 1) return Number(key)
    }
};