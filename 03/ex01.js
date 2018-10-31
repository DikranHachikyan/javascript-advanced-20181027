"use strict";
let message = 'Hello TypeScript', value = 10, isAdmin = false;
console.log(`message:${message} ${value}`);
//value = 'Hello TS'; //Error
let nums = [1, 2, 3, 4, 5, 6, 6];
var UserType;
(function (UserType) {
    UserType[UserType["USER"] = 1] = "USER";
    UserType[UserType["ADMIN"] = 2] = "ADMIN";
    UserType[UserType["SUPER_ADMIN"] = 3] = "SUPER_ADMIN";
})(UserType || (UserType = {}));
;
console.log(UserType);
let userType = UserType.ADMIN; //1-user,2-admin,3-super admin
let v = 'Hello';
v = 10;
