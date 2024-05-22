import { Component, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authService:AuthService=inject(AuthService);

  isLogged(){
    console.log("isLoggedin : " + this.authService.isLogged);
    return !this.authService.isLogged;
  }

}