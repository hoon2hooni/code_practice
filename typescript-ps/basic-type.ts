let isDone: boolean = false;
let hasName: boolean = true;
let colors = [1, '2', 3, { hello: 'love' }];

function combine(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

const range = (start = 0, stop, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);


// the value of `v` below will be `undefined`
// Array.from({length: 5}, (v, i) => i);
// // [0, 1, 2, 3, 4]



  // Array.from(arrayLike, (element, index) => { ... } )

//   interface ArrayLike<T> {
//     readonly length: number;
//     readonly [n: number]: T;
// }