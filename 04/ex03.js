"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.age = (age !== undefined) ? age : -1;
    }
    show() {
        console.log(`User:${this.firstName} ${this.lastName} age:${this.age}`);
    }
}
const user = new User('Anna', 'Smith');
user.show();
