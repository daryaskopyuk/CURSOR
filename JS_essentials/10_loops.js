let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

let j = 5;
do {
  console.log('j variable', j);
  j++;
} while (j < 5);



let k = 5;
while (k < 5) {
  console.log('k variable', k);
}



// Iterating object keys
const obj = {
  name: 'Julia',
  age: 40,
  city: 'Lviv',
};

for (let key in obj) {
  console.log('Key is ', key);
  console.log('Value is ', obj[key]);
}