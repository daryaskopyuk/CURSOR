let integer = 100;

const float = 1.789;

const error = integer / 'Some string'; // NaN

const infinity = float / 0; // Infinity



let incremented = ++integer; // incremented = integer + 1;

console.log('Увеличили на единицу', incremented);

incremented += 3; // incremented = incremented + 3;

console.log('Увеличили на три', incremented);

incremented -= 10; // incremented = incremented - 10;

console.log('Отняли десять', incremented);


// Работа со встроенным объектом Math
console.log('Округление до целого числа', Math.round(float));
console.log('Случайное число от 0 до 1', Math.random());
console.log('Минимальное число', Math.min(45, 18, 9, 5, 87));



