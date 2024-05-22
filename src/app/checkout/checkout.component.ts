import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  activeRoute:ActivatedRoute=inject(ActivatedRoute);
  router:Router=inject(Router);
  course;
  ngOnInit(){
    // this.activeRoute.data.subscribe((data)=>{
    //   this.course=data;
    // })
    this.course=history.state;

  }
}