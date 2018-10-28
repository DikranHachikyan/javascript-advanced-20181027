"use strict";


//xxxxxxjava
//xxx1234567

String.prototype.leftPad = function(pos,char){
    let ret = this;
    char = char || '+';

    if( this.length < pos){
        ret = new Array( pos - this.length + 1 ).join(char) + this;
    }

    return ret;
}


console.log('java'.leftPad(10,'X'));
console.log('javascript'.leftPad(10,'X'));
console.log('Maria'.leftPad(10,'X'));
console.log('156'.leftPad(10,'0'));
