"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import с псевдоним за да избегнем конфликт
const users = __importStar(require("./lib/user"));
const john = new users.User('John', 'Doe');
john.show();
const service = new users.Service('http');
service.show();
class Point {
    constructor() {
        this._x = 0;
        this._y = 0;
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
