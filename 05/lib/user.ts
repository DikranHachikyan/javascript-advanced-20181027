import {Authenticate} from './authenticate';

export class User implements Authenticate{
    loggedIn:boolean = false;

    constructor(private firstName:string, private lastName:string){
    }

    login(user:string, password:string):boolean{
        return user === 'john' && password === '12345';
    }

    logout():void{
        console.log(`User: ${this.firstName} ${this.lastName} logged out`);
    }

    show():void{
        console.log(`User: ${this.firstName} ${this.lastName}`);
    }


}

export class Service implements Authenticate{
    loggedIn:boolean = false;

    constructor(private serviceName:string){
    }

    login(user:string, password:string):boolean{
        return user === 'john' && password === '12345';
    }

    logout():void{
        console.log(`Service: ${this.serviceName}  logged out`);
    }

    show():void{
        console.log(`Service: ${this.serviceName}`);
    }


}