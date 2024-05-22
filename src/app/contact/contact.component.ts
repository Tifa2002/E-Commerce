import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstname:string='';
  lastname:string='';
  country:string='usa';
  message:string='';

  isSubmitted:boolean=false;

  onSubmit(){
    this.isSubmitted=true;
  }
  canExit(){
    console.log('canExit called')
    if((this.firstname||this.lastname||this.message) && !this.isSubmitted){
      return confirm('You have unsaved changes.Do you want to navigate away?')
    }
    else{
      return true;
    }
  }
}