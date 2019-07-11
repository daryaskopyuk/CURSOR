// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     break;
//   }
//
//   console.log(i);
// }

// for (let j = 0; j < 10; j++) {
//   if (j === 4 || j === 7) {
//     continue;
//   }
//
//   console.log(j);
// }

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 2) {
      break outer;
    }

    console.log(i, j);
  }
}

console.log('The End');