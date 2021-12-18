import { Component } from '@angular/core';
import {mathComponent  } from './app.maths';
@Component({
  selector: 'app-root1',
  template: `
   
  <h1>  the value is {{title}} and sum is {{c}}</h1>
  
 first number <input type="number" [(ngModel)]="a">
 sec number <input type="number" [(ngModel)]="b">
{{a+b}}
<div *ngIf="a>b"> grater is {{a}}</div>
<div *ngIf="a<b"> greater is {{b}}</div>
<p>number is {{ans}} </p>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent1 {
  title = 'app works!';
  a:number;
  b:number;
  c:number;
  ans:string;
  constructor(private math1:mathComponent)
  {
      //this.a=12;
      //this.b=18;
      this.c=this.a+this.b;
      if ((this.c)%2==0)
      {
        alert("even");
        this.ans="even"
      }  
      else
          this.ans="odd";

  }
}