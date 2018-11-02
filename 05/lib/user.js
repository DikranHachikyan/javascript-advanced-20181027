"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.loggedIn = false;
    }
    login(user, password) {
        return user === 'john' && password === '12345';
    }
    logout() {
        console.log(`User: ${this.firstName} ${this.lastName} logged out`);
    }
    show() {
        console.log(`User: ${this.firstName} ${this.lastName}`);
    }
}
exports.User = User;
class Service {
    constructor(serviceName) {
        this.serviceName = serviceName;
        this.loggedIn = false;
    }
    login(user, password) {
        return user === 'john' && password === '12345';
    }
    logout() {
        console.log(`Service: ${this.serviceName}  logged out`);
    }
    show() {
        console.log(`Service: ${this.serviceName}`);
    }
}
exports.Service = Service;
