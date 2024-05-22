import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild('username') username:ElementRef;
    @ViewChild('password') password:ElementRef;
    authService:AuthService=inject(AuthService);
    router:Router=inject(Router);
    activateRoute:ActivatedRoute=inject(ActivatedRoute);

    ngOnInit(){
      this.activateRoute.queryParamMap.subscribe((queries)=>{
        const Logout= Boolean(queries.get('logout'));
        if(Logout){
          this.authService.Logout();
          alert('You are Logged Out. IsLogged= '+this.authService.isLogged);
        }
      })
    }


    onLoginClicked(){
      const username=this.username.nativeElement.value;
      const password=this.password.nativeElement.value;
      const user=this.authService.Login(username,password);
      
      if(user === undefined){
        alert('The Login credentials you have entered is not correct.');
      }
      else{
        alert('Welcome '+user.name+' You are logged in.');
        this.router.navigate(['/Courses']);
      }
    }
    
}