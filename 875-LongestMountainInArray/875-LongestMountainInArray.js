// Last updated: 4/14/2026, 12:48:27 PM
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let ret=0
    let n = arr.length
    let l=0
    let r=0
    for(let i = 1 ; i<n-1;i++){
        if(arr[i-1]<arr[i]&&arr[i]>arr[i+1]){
            l=i
            r=i
        
        while(l>0 && arr[l]>arr[l-1]) l--
        while(r<n-1 && arr[r]>arr[r+1])r++
        
        ret=Math.max(ret,r-l+1)  
        }  
    }return ret
};