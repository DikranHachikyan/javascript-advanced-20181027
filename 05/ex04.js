"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import с псевдоним за да избегнем конфликт
const user_1 = require("./lib/user");
//в файла има клас User и се получава конфликт с импортирания
class User {
}
const user = new user_1.User('John', 'Doe');
if (user.login('john', '12345')) {
    user.show();
}
else {
    console.log('Invalid Username or Passwod!');
}
