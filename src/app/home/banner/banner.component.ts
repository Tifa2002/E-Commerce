import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  router:Router=inject(Router);
  onSearchClicked(val:string){
    //console.log(val);
    this.router.navigate(['Courses/'],{queryParams:{search:val}});
  }

}