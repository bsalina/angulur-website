import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html' ,
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  public render=true
  public show=false
  public color="red";
  constructor() { 
  }
  
  onclick(){
    this.render=false;
    this.show=true;
  }
  ngOnInit() {
  }

}
