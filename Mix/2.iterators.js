const browsers = ['Chrome', 'Safari', 'IE'];

for (let browser of browsers) {
  console.log(browser);
}

const name = 'Innokentiy';

for (let char of name) {
  console.log(char);
}

console.log(typeof browsers[Symbol.iterator]);
console.log(browsers[Symbol.iterator]());

const iterator = browsers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const iterableObject = {
  from: 1,
  to: 10,

  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++
          };
        } else {
          return {
            done: true
          };
        }
      }
    }
  }
};

for (let val of iterableObject) {
  console.log(val);
}