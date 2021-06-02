/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    /*
       grid 배열 자체에 작은값을 더한 값을 저장
       1. 가로라인끼리의 합
       2. 세로 라인끼리의 합
       3. 가로와 세로 라인중 작은값과 현재 타겟 위치 값을 더함 (반복)
       4. 제일 마지막 우측 하단 끝열에는 최소값의 합이 저장
    */
    const b = grid.length;
    const r = grid[0].length;
    for (let i = 1; i < r; i++) { // 가로라인의 첫번째 라인의 합
        grid[0][i] += grid[0][i - 1]
    }
    for (let j = 1; j < b; j++) { // 세로라인의 첫번째 라인의 합
        grid[j][0] += grid[j - 1][0]
    }
    
    for (let i = 1; i < b; i++) {
        for (let j = 1; j < r; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    return grid[b - 1][r - 1]
};