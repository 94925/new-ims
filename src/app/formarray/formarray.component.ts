import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent {

  examForm: FormGroup<any> = new FormGroup<any>({
    questions: new FormArray([])
  });

  userForm : FormGroup;
  submittedOptions: any = {};

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

  get questionsFormArray(){
    return this.examForm.get("questions") as FormArray;
  }
  addOptions(){
    const quiz = this.userForm.get('quiz') as FormArray;
    quiz.push(this.initializequiz())
  }
  removeOption(index: number) {
    this.quiz.removeAt(index);
  }
  submit() {
    // console.log(this.userForm.value)
    // const quizArray = this.userForm.get('quiz') as FormArray;
    this.submittedOptions = this.userForm.value
  }
  addquestions(){
    
      // return this.userForm.get("quiz") as FormArray;
      this.questionsFormArray?.push(
        new FormGroup({
          search: new FormControl(),
          quiz : new FormArray([this.initializequiz()])
        })
      )
    
      console.log(this.examForm);
      
    // const quiz = this.userForm.get('quiz') as FormArray;
    //   quiz.push(this.initializequiz())
  }

  delete(i:number){
    this.questionsFormArray.removeAt(i);
  }

}