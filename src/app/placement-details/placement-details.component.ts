import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-placement-details',
  templateUrl: './placement-details.component.html',
  styleUrls: ['./placement-details.component.css']
})
export class PlacementDetailsComponent {
  detailsForm : FormGroup;
  submittedOptions:any=[];
   isPreview:boolean = false;

  constructor(){
    this.detailsForm = new FormGroup({
      name:new FormControl(),
      companyName: new FormControl(),
      salary: new FormControl(),
      date: new FormControl(),
      experience: new FormControl(),
      
    })

  }
  submit(){
    this.submittedOptions.push(this.detailsForm.value);
    console.log(this.detailsForm.value);
    this.isPreview = true;
  }
}
