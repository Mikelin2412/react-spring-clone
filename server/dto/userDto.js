module.exports = class UserDTO {
  id;
  username;
  age;

  constructor(model) {
    this.id = model.id;
    this.username = model.username;
    this.age = model.age;
  }
};
