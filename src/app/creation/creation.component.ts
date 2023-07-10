import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {

  taskcreateForm: FormGroup;
  submittedOptions: any;
  isPreview: boolean = false;
  
  constructor() {
    this.taskcreateForm = new FormGroup({

      title: new FormControl(),
      desc: new FormControl(),
      quiz: new FormArray([this.initializequiz()])
    })
  }
  initializequiz() {
    return new FormGroup({
      data: new FormControl(),
      marks: new FormControl()
    })
  }
  get quiz(){
    return this.taskcreateForm.get("quiz") as FormArray;
  }

  submit() {
    console.log(this.taskcreateForm.value)
    this.submittedOptions = this.taskcreateForm.value;
     this.isPreview = true;
    //   const option = {
    //     title: this.taskcreateForm.value.title,
    //     desc: this.taskcreateForm.value.desc
    //   };
    //   this.submittedOptions.push(option);
    //   this.taskcreateForm.reset(); 
     }

    addOptions(){
      const quiz = this.taskcreateForm.get('quiz') as FormArray;
      quiz.push(this.initializequiz())
    }
    removeOption(index: number) {
      this.quiz.removeAt(index);
    }
  }
