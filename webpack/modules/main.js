import { pi, random, max as maximumNumber, user, sum, Book } from './data.js';

import * as data from './data.js';
import defaultValue from './data.js';

console.log(`Pi is ${pi}, random is ${random}`);

console.log(`Maximum number is ${maximumNumber}`);

console.log(`Current user is ${user}`);

console.log(`Sum is ${sum(5, 4)}`);


const book = new Book('You don\'t know JS');

console.log(book);

// export function() { console.log('Error'); }; // error

console.log(data);


console.log(`Default val is ${defaultValue}`);
