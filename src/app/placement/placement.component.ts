import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent {
   
  scheduleForm: FormGroup<any> = new FormGroup<any>({
    rounds: new FormArray([this.initializerounds()])
  });

  initializerounds(){
    return new FormGroup({
      round : new FormControl(),
      date : new FormControl(),
      
    })
  }

  placementForm : FormGroup;
  submittedOptions:any=[];
  isPreview:boolean = false;
  
  

  constructor(){
    this.placementForm = new FormGroup({
      name: new FormControl(),
      personName: new FormControl(),
      personNumber: new FormControl(),
      persondesignation: new FormControl(),
      jdAcknowledge: new FormControl(),
      lwd: new FormControl(),  
    })

  }
  
  
  get rounds(){
    return this.scheduleForm.get("rounds") as FormArray;
  }
  Add(){
    const rounds = this.scheduleForm.get('rounds') as FormArray;
    rounds.push(this.initializerounds())
  }

  submitPlacementForm(){
    this.isPreview = true;
    this.submittedOptions.push(this.placementForm.value);
    console.log(this.placementForm.value);
    // this.submittedOptions.push(this.scheduleForm.value);
    // console.log(this.scheduleForm.value);
  }
  submit(){
    // this.submittedOptions.push(this.scheduleForm.value);
    console.log(this.scheduleForm.value);
    this.isPreview = true;
  }
  }

