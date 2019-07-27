export const pi = 3.14;


const random = 31;
const max = 100;
const name = 'Darya';

export { random, max, name as user }


export function sum(a, b) {
  return a + b;
}

export class Book {
  constructor(title) {
    this.title= title;
  }
}


const defaultValue = 'Cursor';

export default defaultValue;

// const testValue = 'Test'
//
// export default testValue;
