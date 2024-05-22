import { Component, OnInit, inject} from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  searchString:string;
  constructor(private activeRoute:ActivatedRoute){}

  ngOnInit(){
    // this.searchString=this.activeRoute.snapshot.queryParamMap.get('search');
    //console.log(this.searchString);
    this.activeRoute.queryParamMap.subscribe((data)=>{
      this.searchString=data.get('search');
      if(this.searchString==='' || this.searchString=== undefined || this.searchString===null){
        //this.AllCourses=this.coursesService.courses;this line of code  will not add observable.it will get courses immediately.
        //this.courseService.getAllcources().subscribe((data:Course[])=>{
          //this.AllCourses=data;//this two lines of comments called when you perform resolve route guard.
          this.AllCourses = this.activeRoute.snapshot.data['courses'];
      }else{
        this.AllCourses=this.coursesService.courses.filter(x=> x.title.toLowerCase().includes(this.searchString.toLocaleLowerCase()));
      }
    })
  }
  
  
}