class User {
  constructor(name = User.getDefaultName()) {
    this.name = name;
  }

  static getDefaultName() {
    return 'Anonymous guest';
  }
}

const userAnna = new User();

// console.log(user);
//
// console.log(user.getDefaultName);
// console.log(User.getDefaultName);