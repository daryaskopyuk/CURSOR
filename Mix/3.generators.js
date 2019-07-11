// Example 1
// function* process() {
//   console.log('Start');
//   yield;
//   console.log('Finish');
// }
//
// let iterator = process();
//
// console.log(iterator.next());
// console.log(iterator.next());




// Example 2
// function* sequence() {
//   console.log('First');
//   yield 100;
//   console.log('Second');
//   yield 200;
//   console.log('Third');
//   yield 300;
//   console.log('Last');
// }
//
// const seq = sequence();
//
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());





// Example 3
function* connection() {
  const res = yield  5 * 5;

  console.log(`Res is ${res}`);
}

const iter = connection();
const { value } = iter.next();
iter.next(value * 5);
