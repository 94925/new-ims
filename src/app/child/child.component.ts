import { Component, EventEmitter, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent   {

@Input() public result:number = 0;

@Output() public resetEvent: EventEmitter<any> = new EventEmitter();

reset(){
  this.resetEvent.emit();
}

  }


