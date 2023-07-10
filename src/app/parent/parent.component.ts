import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

public count:number = 0;

add(){
  this.count = this.count + 1;
}

catch(){
  this.count = 0;
}

}
