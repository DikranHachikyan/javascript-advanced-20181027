import {Stack} from './lib/stack';
import {User}  from './lib/user';

const names = new Stack<string>();

names.push('Anna');
names.push('Maria');
names.push('John');

console.log(`size of stack: ${names.size()}`);

console.log(`${names.pop()}`);
console.log(`${names.pop()}`);

console.log(`size of stack: ${names.size()}`);

const users = new Stack<User>();

users.push( new User('Anna', 'Smith'));
users.push( new User('Maria', 'Anders'));
users.push( new User('John', 'Doe'));

console.log(`number of users:${users.size()}`);

const u:User = users.pop();

u.show();