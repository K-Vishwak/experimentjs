function pascalsTraingle(numRows) {
    let rows = Array.from({ length: numRows }, () => []);
    rows[0] = [1];
    if (numRows <= 1) { return rows; }
    else {
        rows[1] = [1, 1];
        for (let row = 2; row < numRows; row++) {
            for (let i = 0; i < row + 1; i++) {
                if (i === 0 || i === row) {
                    rows[row][i] = 1;
                } else {
                    rows[row][i] = rows[row - 1][i] + rows[row - 1][i - 1];
                }
            }
        }
    }
    return rows;
}

console.log(JSON.stringify(pascalsTraingle(10)));