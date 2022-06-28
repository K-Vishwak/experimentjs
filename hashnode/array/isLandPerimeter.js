function islandPerimeter(grid) {
    let result = 0;
    let row = grid.length;
    let col = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                // bottom
                if ((i + 1 < row && grid[i + 1][j] === 0) || row <= i + 1) {
                    result += 1;
                }
                // right
                if ((j + 1 < col && grid[i][j + 1] === 0) || col <= j + 1) {
                    result += 1;
                }
                // left
                if ((j - 1 >= 0 && grid[i][j - 1] === 0) || j - 1 < 0) {
                    result += 1;
                }
                // top
                if ((i - 1 >= 0 && grid[i - 1][j] === 0) || i - 1 < 0) {
                    result += 1;
                }
            }
        }
    }
    return result;
}

console.log(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]));