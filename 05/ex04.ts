import {Authenticate,Drawable} from './lib/authenticate';
//import с псевдоним за да избегнем конфликт
import { User as SiteUser} from './lib/user';

//в файла има клас User и се получава конфликт с импортирания
class User {

}

const user = new SiteUser('John', 'Doe');

if( user.login('john','12345')){
    user.show()
}
else{
    console.log('Invalid Username or Passwod!');
}
