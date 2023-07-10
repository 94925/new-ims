import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-placement-registration',
  templateUrl: './placement-registration.component.html',
  styleUrls: ['./placement-registration.component.css']
})
export class PlacementRegistrationComponent {
  registrationForm : FormGroup;
  submittedOptions:any=[];
   isPreview:boolean = false;

  constructor(){
    this.registrationForm = new FormGroup({
      name:new FormControl(),
      presentCompany: new FormControl(),
      salary: new FormControl(),
      employeeId:new FormControl(),
      experience: new FormControl(),
      
    })

  }
  submit(){
    console.log(this.registrationForm.value)
  }
}
