const fruits = [];

fruits.push('Apple'); // переменная была объявлена с const, но ошибки нет

console.log(fruits);

fruits.push ('Orange');

console.log(fruits);

console.log(fruits[0]);

console.log(fruits.length);

fruits.reverse();

console.log(fruits); // ['Orange', 'Apple']; - исходный массив изменился

fruits.push('Apricot');

console.log(fruits.join(', ')); // 'Orange, Apple, Apricot' - исходный массив не изменился

fruits[2] = 'Pineapple';

console.log(fruits);

console.log(fruits[10]); // ?


const days = new Array(100, 200, 300);

console.log(days);

const arr = new Array(3);

console.log(arr); // ?


