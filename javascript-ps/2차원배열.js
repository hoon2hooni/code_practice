// const matrix = Array.from(Array(5), () => new Array(2).fill(0));
const arr1 = Array.from(Array(5), () => new Array(2).fill(0));
const testArr2 = [1,2,3]
console.log(testArr2.slice(2));
console.log(arr1);

arr1[2][1] = 3;
console.log(arr1);

const [N, M, K] = [3, 4, 5];
const foodArr = [];
foodArr.push([3,2]);
foodArr.push([2,2]);
foodArr.push([3,1]);
foodArr.push([2,3]);
foodArr.push([1,1]);
const matrix = Array.from(Array(N), () => new Array(M).fill("."));
for (foodLoc of foodArr){
    const adjustedLoc = foodLoc.map(x => x-1);
    let [x, y] = adjustedLoc;
    matrix[x][y] = '#';
}
console.log(matrix);
const visited = Array.from(Array(N), () => new Array(M).fill(0));
const dr = [-1, 0, 1, 0];
const dc = [0, -1, 0, 1];

function dfs(start){
    const stack = [];
    stack.push(start);
    visited[start[0]][start[1]] = 1;
    let depth = 1;
    while (stack.length){
        console.log(stack);
        const [r, c] = stack.pop();
        for (let i = 0; i < 4; i++) {
            let moved_r = r + dr[i];
            let moved_c = c + dc[i];
            if (moved_r >= 0 && moved_r < N 
                && moved_c >= 0 && moved_c < M) {
                    if(visited[moved_r][moved_c] !== 1 
                        && matrix[moved_r][moved_c] === "#") {
                            console.log(moved_r, moved_c);
                            ++depth;
                            visited[moved_r][moved_c] = 1;
                            stack.push([moved_r, moved_c]);
                        }
                }     
        }
    }
    return depth;
}

const starts = [];
for (let i = 0; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
        if (matrix[i][j] === "#") {
            starts.push([i, j]);
        }
    }
}

let ans = 0;
console.log(starts);
for (let start of starts){
    if (visited[start[0]][start[1]] !== 1){
        let depth = dfs(start);
        if (depth  > ans) {
            ans = depth;
        }

    }
}
console.log(ans);
