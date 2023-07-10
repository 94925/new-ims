import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
public loginForm: FormGroup = new FormGroup(
  {
    email: new FormControl(),
      password: new FormControl()
  }
)

  constructor(private _loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    
    }
    login(){
      console.log(this.loginForm);
      this._loginService.login(this.loginForm.value).subscribe(
        (data:any)=>{
          sessionStorage.setItem("ims-token",data.token);
          alert('login sucesfully')
          this.router.navigateByUrl("/dashboard");
        },
        (err:any)=>{
          alert("Invalid credentials");
        }
      )
    }
  }


