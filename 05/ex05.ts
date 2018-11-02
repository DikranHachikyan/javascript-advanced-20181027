import {Authenticate,Drawable} from './lib/authenticate';
//import с псевдоним за да избегнем конфликт
import * as users from './lib/user';


const john = new users.User('John','Doe');

john.show();

const service = new users.Service('http');

service.show();

class Point{
    private _x:number = 0;
    private _y:number = 0;

    set x(x:number){
        this._x = x;
    }
    set y(y:number){
        this._y = y;
    }
    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }
}

