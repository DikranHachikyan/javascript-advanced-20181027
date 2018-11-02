export interface Authenticate {
    //данни
    loggedIn:boolean;
    //методи
    login(user:string, password:string):boolean;
    logout():void;
}

export interface Drawable{
    draw():void;
}