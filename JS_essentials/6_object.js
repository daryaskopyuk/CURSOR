const user = {};

user.name = 'Ivan Petrov';

user['age'] = 25;

const key = 'activeUser';

user[key] = true;

console.log('user', user);

console.log('User name', user.name);

console.log('Is user active', user[key]);

console.log(user.address); // ?

const user2 = {
  name: 'Olga',
  age: 30,
  activeUser: false,
};

console.log('user2', user2);

delete user2.name;