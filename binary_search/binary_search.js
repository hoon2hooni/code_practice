let left  = 0
let right = 200
const target = 55
function binary_search(left, right, target){
    while (left <= right ){
        let mid = Math.floor((left + right)/2);
        console.log(`mid =${mid} , left = ${left}, right = ${right}`);
        if (mid === target) return mid;
        else if (mid < target){
            left = mid + 1;
        } else {
            right = mid + 1;
        }
    } 
    return false;  
}

console.log(binary_search(100,200 ,132));
const arr = [1,2,4,5,6]
arr.hello = "안녕";
arr.push(3);
for(let i in arr){
    console.log(i);
}

for(let i of arr){
    console.log(i);
}
console.log(arr);
console.log(typeof(arr));