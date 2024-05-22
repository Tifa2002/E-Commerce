import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    isLogged:boolean=false;
    userService:UserService=inject(UserService);

    Login(username:string,password:string){
        let user=this.userService.users.find((u)=>
            u.username === username && u.password === password);
        if(user===undefined)
            this.isLogged=false;
            
        else
            this.isLogged=true;
            //console.log("Login Fn : " + this.isLogged)
            return user;
        }
    Logout(){
        this.isLogged=false;
    } 
    IsAuthenticated(){
        //console.log(this.isLogged);
        return this.isLogged;
    }

}
