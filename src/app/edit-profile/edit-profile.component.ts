import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  profileForm : FormGroup;


  constructor(){
    this.profileForm = new FormGroup({
      firstName: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      lastName: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      phonenumber:new FormControl(null, [Validators.required, Validators.min(1000000000),Validators.max(9999999999)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      dob:new FormControl(),
      address:new FormControl(),
      education : new FormArray([this.initializeeducation()])
  });
}
initializeeducation(){
  return new FormGroup({
    class : new FormControl(),
    group : new FormControl(),
    percentage: new FormControl(),
    year:new FormControl()
  })
}
get education(){
  return this.profileForm.get("education") as FormArray;
}
details(){
  const education = this.profileForm.get('education') as FormArray;
  education.push(this.initializeeducation());
}
submit(){
    console.log(this.profileForm.value)
}
}

