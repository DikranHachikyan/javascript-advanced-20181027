interface Authenticate {
    //абстрактни методи
    login(username:string,password:string):boolean;
    logout():void;
}

//1.
class User implements Authenticate{

    show():void{
        console.log('show user');
    }

    login(username:string,password:string):boolean{
        return username === 'john' && password === '12345';
    }

    logout():void{
        console.log('user logged out');
    }
}

class Service implements Authenticate{

    login(username:string,password:string):boolean{
        return username === 'web-app' && password === '12345';
    }

    logout():void{
        console.log('service logged out');
    }    
}
const user = new User();

user.show();

//2.
function checkUser(user:Authenticate, u:string, p:string){
    if(user.login(u,p)){
        console.log('Ok!');
    }
}

const service  = new Service();

checkUser(user, 'john','12345');
checkUser(service, 'web-app','12345');

let ob:Authenticate = new Service();

ob.logout();

console.log( ob instanceof Service);

ob = new User(); 
ob.logout();

