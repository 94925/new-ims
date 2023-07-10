import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  emailForm : FormGroup;
  submittedOptions:any=[];
  isPreview:boolean = false;

  constructor(){
    this.emailForm = new FormGroup({
      letter:new FormControl(),
      to: new FormControl(),
      cc: new FormControl(),
      bcc: new FormControl(),
      subject: new FormControl(),
      body: new FormControl(),
      from: new FormControl(),
      
    })

  }
  submit(){
    this.submittedOptions.push(this.emailForm.value);
    console.log(this.emailForm.value);
    this.isPreview = true;
  }
  }


