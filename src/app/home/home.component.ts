import { Component, Injectable, OnInit, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../Models/course';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit{
    activeRoute:ActivatedRoute=inject(ActivatedRoute);

    ngOnInit(){
        this.activeRoute.fragment.subscribe((data)=>{
            //console.log(data);
            this.jumpToSection(data);
        });
    }

    jumpToSection(section){
        document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
    }
}
