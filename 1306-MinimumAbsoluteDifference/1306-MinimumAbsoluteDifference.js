// Last updated: 4/14/2026, 12:48:19 PM
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b)
    let min_diff= Infinity
    let result = []

    for(let i = 1 ; i<arr.length ; i++){
        min_diff= Math.min(min_diff,arr[i]-arr[i-1])
    }
     for(let i = 1 ; i<arr.length ; i++){
        if(arr[i]-arr[i-1]===min_diff){
            result.push([arr[i-1],arr[i]])
        }
    }return result
    
};