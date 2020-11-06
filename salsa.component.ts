import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-salsa',
   templateUrl: './salsa.component.html',
   
   styleUrls: ['./salsa.component.css']
})

export class SalsaComponent implements OnInit {
    SalsaComponent = "Entered in new component created";
    public greeting=""
    public image=""
   constructor() {}
   ngOnInit() { }
   onclick(event){
      this.greeting="clicked";
   }
   on(){
      
      this.image="clicked on the image";
   }
}