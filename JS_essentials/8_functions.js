function killGoTCharacter(person) {
  console.log(person, ' is dead');
}

killGoTCharacter('Your favourite character');



// Локальная область видимости
const outerVar = 300;

function createLocalVariables(val1, val2, notDefinedVar) {
  var firstVar = val1;
  let secondVar = val2;
  const thirdVar = outerVar;

  console.log('First variable is ', firstVar);
  console.log('Second variable is ', secondVar);
  console.log('Third variable is ', thirdVar);
  console.log('Value by default is ', notDefinedVar);

  return firstVar + secondVar;
}

createLocalVariables(100, 200);

console.log(firstVar, secondVar); // Error



// Few returns;
function checkAge(age) {
  if (age > 18) {
    return true;
  }

  return console.log('Access is not allowed');
}

// Value returned by default is undefined
function greetUser(name) {
  console.log('Hello, ', name);
}

// Function declaration
const sum = function(a, b) {
  return a + b;
};

// Anonymous functions
function ask(age, yes, no) {
  if (age > 18) yes()

  no();
}

ask(
    16,
    function() { console.log('Access allowed'); },
    function() { console.log('Access denied'); }
);

// Arrow functions
const squaring = num => num * num;

const sumOfSquares = (num1, num2) => {
  const sq1 = num1 * num1;
  const sq2 = num2 * num2;

  return sq1 + sq2;
};