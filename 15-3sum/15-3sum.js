// Last updated: 4/14/2026, 12:48:56 PM
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    let n = nums.length
    nums.sort((a, b) => a - b)

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let l = i + 1
        let r = n - 1
        while (l < r) {
            let s = nums[i] + nums[l] + nums[r]
            if (s === 0) {
                res.push([nums[i], nums[l], nums[r]])
                l++
                r--
                while (l < r && nums[l] === nums[l - 1]) {
                    l++
                } while (l < r && nums[r] === nums[r + 1]) {
                    r--
                }
            }
            else if (s < 0) {
                l++
            } else {
                r--
            }
        }
    }return res
    
};