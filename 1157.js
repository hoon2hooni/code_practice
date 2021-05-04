const input = ' mississipie '

const charsArr = input.toUpperCase().split('');

const charsMap = {};
for (char of charsArr){
    char in charsMap ? ++charsMap[char] : charsMap[char] = 1;
}
console.log(charsMap);


const max = Math.max(...Object.values(charsMap));

let maxChar = '';
let counter = 0;

for (entry of Object.entries(charsMap)){
    let [c, v] = entry;
    console.log(c,v);
    if (v === max){
        ++counter;
        maxChar = c;
    }
}

counter > 1 ? console.log('?') : console.log(maxChar);