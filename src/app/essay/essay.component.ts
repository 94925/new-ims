import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-essay',
  templateUrl: './essay.component.html',
  styleUrls: ['./essay.component.css']
})
export class EssayComponent {
  essayForm : FormGroup;
   submittedOptions:any=[];
   isPreview:boolean = false;
   
  constructor(){
    this.essayForm = new FormGroup({
      question:new FormControl(),
      desc: new FormControl()
      
    })

  }
  submit(){
    this.submittedOptions.push(this.essayForm.value);
    console.log(this.essayForm.value);
    this.isPreview = true;  }
}
