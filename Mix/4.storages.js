localStorage.setItem('user', 'Oleg Vinnik');
localStorage.setItem('locationData', JSON.stringify({
  country: 'Ukraine',
  city: 'Kiev',
  zip: 30211,
}));

console.log(localStorage);

const user = localStorage.getItem('user');
const locationData = localStorage.getItem('locationData');

console.log(`User name is ${user}`);
console.log('Location data:', JSON.parse(locationData));

localStorage.removeItem('locationData');
// localStorage.clear();