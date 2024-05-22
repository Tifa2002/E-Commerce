import { Component,OnInit,Injectable,Input, OnDestroy} from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
@Injectable()
export class CourseDetailComponent implements OnInit,OnDestroy{
  courseId:number;
  selectedCourse:Course;
  paramMapObs;
  //activeRoute:ActivatedRoute=Inject(ActivatedRoute);
  
  constructor(private courseService:CourseService,private route: ActivatedRoute){}

  ngOnInit(){
      //this.courseId=+this.route.snapshot.paramMap.get('id');
      //console.log(this.courseId);
      //this.selectedCourse=this.courseService.courses.find(course => course.id===this.courseId); 
      //console.log(this.selectedCourse); 
      // this.route.params.subscribe((data)=>{
      //   this.courseId=+data['id'];
      //   this.selectedCourse=this.courseService.courses.find(course => course.id===this.courseId);
      // })
      this.paramMapObs=this.route.paramMap.subscribe((data)=>{
        this.courseId=+data.get('id');
        this.selectedCourse=this.courseService.courses.find(course => course.id===this.courseId);
      }) 
  
}
  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }
}
