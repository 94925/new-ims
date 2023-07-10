import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  taskForm: FormGroup<any> = new FormGroup<any>({
    taskit: new FormArray([])
  });
  taskcreateForm:FormGroup;
   submittedOptions:any;
  

 constructor(){
  this.taskcreateForm = new FormGroup({
    
    title: new FormControl(),
  desc: new FormControl(),
   quiz : new FormArray([this.initializequiz()])
  })
 }
  initializequiz(){
 return new FormGroup({
  data: new FormControl(),
  marks: new FormControl()
 })
   }
//   get Options(){
//  return this.taskcreateForm.get("taskcreateForm") as FormArray;
//    }
   get quiz(){
    return this.taskcreateForm.get("quiz") as FormArray;
  }
 get taskitFormArray(){
  return this.taskForm.get('taskit') as FormArray;
 }
 addOptions(){
  const quiz = this.taskcreateForm.get('quiz') as FormArray;
  quiz.push(this.initializequiz())
}
removeOption(index: number) {
  this.quiz.removeAt(index);
}
//  submit(){
//   this.submittedOptions = this.taskcreateForm.value;

//  }
//  submit() {
//    this.submittedOptions = this.taskcreateForm.value;
//     console.log(this.submittedOptions);
//   // console.log(this.taskcreateForm.value)
// }
submit() {
  // console.log(this.userForm.value)
  // const quizArray = this.userForm.get('quiz') as FormArray;
  this.submittedOptions = this.taskcreateForm.value
}

 createTask(){
  this.taskitFormArray?.push(
    new FormGroup({
      title: new FormControl(),
      desc: new FormControl(),
      quiz : new FormArray([this.initializequiz()])
    })
  )
  console.log(this.taskForm.value);
 }
 
}
   







