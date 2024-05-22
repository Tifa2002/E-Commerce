import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { CourseService } from "./Services/course.service";


export const canActivate = ()=>{
    const authService=inject(AuthService);
    const router=inject(Router);
    if(authService.IsAuthenticated()){
        return true;
    }else{
        router.navigate(['/Login']);
        return false;
    }
}
export const canActivateChild = ()=>{
    const authService=inject(AuthService);
    const router=inject(Router);
    if(authService.IsAuthenticated()){
        return true;
    }else{
        router.navigate(['/Login']);
        return false;
    }
}
export const resolve=()=>{
    const courseService=inject(CourseService);
    return courseService.getAllcourses();
}