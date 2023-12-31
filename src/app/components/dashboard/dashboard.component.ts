import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  logout(){
    sessionStorage.removeItem('ims-token');
    this. _router.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
