/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = temp;
        }
    }
    // console.log(matrix)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            // 현재 행의 양쪽 끝 값들을 교환 
            // 가운데 값은 자기 자신의 값을 가짐
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][n - j - 1]
            matrix[i][n - j - 1] = temp
        }
    }
};