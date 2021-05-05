//다장조

const scales = [1, 2, 3, 10, 5, 6, 7, 8];
const n = scales.length;
let ascending = 1;
let descending = 1;

for (let idx = 0; idx < n-1; ++idx){
    if (scales[idx+1] - scales[idx] === 1){
        ++ascending;
    } else if(scales[idx+1] -  scales[idx] === -1){
        ++descending;
    } else {
        continue;
    }
}

if (ascending === n){
    console.log("ascending");
} else if(descending === n){
    console.log("descending");
} else{
    console.log("mixed");
}

