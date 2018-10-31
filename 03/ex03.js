"use strict";
//1.
class User {
    show() {
        console.log('show user');
    }
    login(username, password) {
        return username === 'john' && password === '12345';
    }
    logout() {
        console.log('user logged out');
    }
}
class Service {
    login(username, password) {
        return username === 'web-app' && password === '12345';
    }
    logout() {
        console.log('service logged out');
    }
}
const user = new User();
user.show();
//2.
function checkUser(user, u, p) {
    if (user.login(u, p)) {
        console.log('Ok!');
    }
}
const service = new Service();
checkUser(user, 'john', '12345');
checkUser(service, 'web-app', '12345');
let ob = new Service();
ob.logout();
console.log(ob instanceof Service);
ob = new User();
ob.logout();
