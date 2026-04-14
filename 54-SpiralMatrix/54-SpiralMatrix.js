// Last updated: 4/14/2026, 12:48:50 PM
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ret = []

    while (matrix.length){
        ret.push(...matrix.shift())

        if(matrix.length && matrix[0].length){
            for(let row of matrix){
                ret.push(row.pop())
            }
        }
        if(matrix.length){
            ret.push(...matrix.pop().reverse())
        }
        if(matrix.length && matrix[0].length){
            for(let i = matrix.length-1;i>=0 ; i--){
                ret.push(matrix[i].shift())
            }
        }
    }
    return ret
};