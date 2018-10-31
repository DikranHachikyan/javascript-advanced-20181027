
let message:string = 'Hello TypeScript',
    value:number = 10,
    isAdmin:boolean=false;

console.log(`message:${message} ${value}`);

//value = 'Hello TS'; //Error

let nums:number[] = [1,2,3,4,5,6,6];

enum UserType{
    USER=1,
    ADMIN,
    SUPER_ADMIN
};

console.log(UserType);

let userType:UserType = UserType.ADMIN;//1-user,2-admin,3-super admin

let v:any = 'Hello';

v = 10;