import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
   focused: { [key: string]: boolean } = {
    userName: false,
    userAge: false,
    userEmail: false,
    userPassword: false
  };
  riseLabel(event : any , field: string){
    
  if(event.target.value.length > 0){
    this.focused[field] = true
   
  }
  else{this.focused[field] = false}
  }
  
}

