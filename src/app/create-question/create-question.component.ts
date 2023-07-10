import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {
  
  userForm : FormGroup;
  submittedOptions: any = {};
  isPreview:boolean = false;
  isEdit:boolean = false;
  
  
  

  constructor(){
    this.userForm = new FormGroup({
      search: new FormControl(),
      quiz : new FormArray([this.initializequiz()])
    })

  }
  initializequiz(){
    return new FormGroup({
      options : new FormControl(),
      marks : new FormControl()
    })
  }

  get quiz(){
    return this.userForm.get("quiz") as FormArray;
  }


  addOptions(){
    const quiz = this.userForm.get('quiz') as FormArray;
    quiz.push(this.initializequiz())
  }
  removeOption(index: number) {
    this.quiz.removeAt(index);
  }
  submit() {
    this.isPreview = true;
    // console.log(this.userForm.value)
    // const quizArray = this.userForm.get('quiz') as FormArray;
    this.submittedOptions = this.userForm.value
  }
  edit() {
    this.isPreview = false;
  }

}

