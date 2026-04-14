// Last updated: 4/14/2026, 12:48:42 PM
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0
    

    const bfs = (r,c) => {
        const q = []
        q.push([r, c])
        visit.add(r + ',' + c)

        while (q.length > 0) {
            const [row, col] = q.shift()
            const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            for (const [dr, dc] of direction) {
                r = row + dr
                c = col + dc

                if (r >= 0 && r<rows && c<cols &&c >= 0 && grid[r][c] === "1" && !visit.has(r + "," + c)){
                    q.push([r, c])
                    visit.add(r + ',' + c)
                }
            }
        }
    }
    const rows = grid.length
    const cols = grid[0].length
    let visit = new Set()
    let count = 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (r >= 0 && c >= 0 && grid[r][c] == "1" && !visit.has(r + "," + c)) {
                bfs(r,c)
                count++
            }
        }
    } return count
};