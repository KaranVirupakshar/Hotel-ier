import { Component ,Inject } from '@angular/core';
import {mathComponent  } from './app.maths';
@Component({
  selector: 'app-root',
  template: `
  <input type="number" placeholder = "Number1" [(ngModel)]="a">
  <br>
 <input type="number"  placeholder = "Number2"[(ngModel)]="b">
 <br>
 <input type="number"  placeholder = "Answer" [(ngModel)]="c">
 <br>
 <input type="button" value="add" (click)="addnum()">
 <input type="button" value="sub" (click)="subtnum()">
 <input type="button" value="mul" (click)="mulnum()">
 <input type="button" value="div" (click)="divnum()">
  `,
  styleUrls: ['./app.component.css']

})
export class calciComponent1 {
  title = 'app works!';
  
  a:number;
  b:number;
  c:number;
  
  constructor(private math1:mathComponent)
  {
  }
  addnum()
  {
     alert("add called");

     this.c=this.math1.add(this.a,this.b);
  }
  subtnum()
  {
     alert("subt called"); 
     this.c=this.math1.subt(this.a,this.b);
  }

 mulnum()
  {
     alert("mul called"); 
     this.c=this.math1.mul(this.a,this.b);
  }
  
  divnum()
  {
     alert("subt called"); 
     this.c=this.math1.div(this.a,this.b);
  }

}