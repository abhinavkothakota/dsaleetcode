// Last updated: 4/14/2026, 12:48:48 PM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0
    let r = 0
    let maxP=0

    while(r!=prices.length){
        if(prices[l]<prices[r]){
            let prof=prices[r]-prices[l]
            maxP=Math.max(maxP,prof)
        }else{
            l=r
        } 
        r++
    }return maxP
};