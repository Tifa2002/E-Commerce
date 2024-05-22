import { NgModule } from "@angular/core";
import { Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { canActivate,canActivateChild,resolve } from "./auth.Guard";
import { AuthService } from "./Services/auth.service";


//Define Routing
//Make the default page is the Home page
const routes:Routes=[
    {path:'',component:HomeComponent},
    //{path:'',redirectTo:'Home',pathMatch:'full'},//Make the default page is the Home page
    {path:'Home',component:HomeComponent},
    {path:'About',component:AboutComponent},
    {path:'Contact',component:ContactComponent,canDeactivate:[(comp:ContactComponent)=>{return comp.canExit();}]},
    {path:'Courses',component:CoursesComponent,resolve:{courses:resolve}},
    //{path:'Courses/Course/:id',component:CourseDetailComponent},
    {path:'Courses',canActivateChild:[canActivateChild],children:[
      {path:'Course/:id',component:CourseDetailComponent},
      {path:'Checkout',component:CheckoutComponent,/*data:{name:'Test Course',price:400}(This called static data*/}
    ]},
    {path:'Login',component:LoginComponent},
    {path:'**',component:NotFoundComponent}//the Wild Card Route must defined at the end of routes.
    //This means that two astrek will match the url is typed by the user and routes array and if it does not match the NotFoundComponent will release
  ]
@NgModule({
    imports:[RouterModule.forRoot(routes,{enableTracing:true}),
    
    
    
    ],
    exports:[RouterModule,
    
    
    ]
})
export class RoutingModule{

}