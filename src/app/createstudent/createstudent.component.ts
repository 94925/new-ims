import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  public studentForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null,[Validators.required,Validators.min(3),Validators.max(15)]),
      gender: new FormControl(),
      mobile: new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
      email: new FormControl(null,[Validators.required]),
      batch: new FormControl(null,[Validators.required]),
      address: new FormGroup(
        {
          city: new FormControl(),
          mandal: new FormControl(),
          district: new FormControl(null,[Validators.required]),
          state: new FormControl(),
          pincode: new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
        }
      ),
      company: new FormGroup(
        {
          name: new FormControl(),
          location: new FormControl(),
          package: new FormControl(),
          offerdate: new FormControl(),
        }
      ),
      educations: new FormArray([]),
      sourcetype: new FormControl(),
      sourceFrom: new FormControl(),
      referalName: new FormControl()
    }

  )
  
  get educationsFormArray() {
    return this.studentForm.get('educations') as FormArray;
  }

  add(){
    this.educationsFormArray.push(
      new FormGroup(
        {
          qualification: new FormControl(),
          year: new FormControl(),
          percentage: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(100)])
        }
      )
    )
  }
  delete(i: number){
    this.educationsFormArray.removeAt(i);
  }

  public id:string= "";

  constructor(private _studentService: StudentService,private activatedRoute: ActivatedRoute) { 

   this.activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;

      this._studentService.getstudent(this.id).subscribe(
        (data:any)=>{
          this.studentForm.patchValue( data);
        }
      )
    }
   )
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.studentForm.value)
    if(this.id){
      //edit
      this._studentService.updatestudent(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          alert("updated succefully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    else{
      this._studentService.createstudent(this.studentForm.value).subscribe(
        (data:any)=>{
          alert("created succefully");
        },
        (errr:any)=>{
          alert("Internal server error")
        }
      )
    }
  }

}
