const symbol = Symbol();

console.log(symbol);
console.log(typeof symbol)

const id = new Symbol(); // error

const name = Symbol('name');
const anotherName = Symbol('name');

console.log(name);

console.log(name === anotherName); // false

const city = Symbol.for('city');
const city2 = Symbol.for('city');

console.log(city === city2); // true
console.log(Symbol.keyFor(city2));

const person = {
  name: 'Anna',
  age: 40,
  [Symbol.for('password')]: 'SomePassword',
};

console.log(person);
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));

console.log(person.password);
console.log(person[Symbol.for('password')]);

person.password = 'NewPassword';

console.log(person);

console.log(Object.getOwnPropertySymbols(person));