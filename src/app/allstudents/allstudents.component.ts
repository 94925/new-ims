import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

  public students: any=[];
  public term:string ="";
  public column:string="";
  public order:string="";

  constructor(private _studentService:StudentService,private router:Router) {
    this._studentService.getstudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert('Internal sever error');
      }
    )
   }

  ngOnInit(): void {
  }
  filter(){
    this._studentService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  pagination(page:number){
    this._studentService.getPagedstudents(page).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  sort(){
    this._studentService.getSortedstudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  delete(id:string){
  this._studentService.deletestudent(id).subscribe(
    (data:any)=>{
      alert("deleted succefully!!!");
      location.reload();
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
  }
  view(id:string){
  this.router.navigateByUrl('/dashboard/student-details/'+id);
  }
  edit(id:string){
    this.router.navigateByUrl('/dashboard/edit-student/'+id);
  }
}
