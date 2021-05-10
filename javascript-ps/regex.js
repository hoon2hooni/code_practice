let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];





let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\n/.test(descr));


// JS Lookahead assertion x(?=y)

let regex = /First(?= test)/g;
let regex = /First(?= test)/g;

console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null

let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];
ripe_oranges = oranges.filter(fruit => fruit.match(/(?<=ripe )orange/))

let ripe_oranges = oranges.filter( fruit => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]



// Select descriptions that contains 'en' or 'ed' words endings:
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
