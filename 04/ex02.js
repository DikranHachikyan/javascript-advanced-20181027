"use strict";
class Person {
    //2.Методи
    //2.1 конструктор (Инициализира данните на класа)
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = (age === undefined) ? -1 : age;
    }
    show() {
        console.log(`Person:${this.firstName} ${this.lastName} age:${this.age}`);
    }
}
const person = new Person('John', 'Doe', 30);
person.show();
