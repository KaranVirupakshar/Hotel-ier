import { Component } from '@angular/core';
import {details} from './app.pdet';
@Component({
  selector: 'app-root1',
  template: `
  <div>
  <h2>REGISTER HERE</h2>
  <form #form="ngForm" (ngSubmit)="submitForm(form.value)">
      <div class="form-group">
        <label>First Name:</label>
          <input type="text" class="form-control" name="firstname" placeholder="Firstname"   [(ngModel)]='firstname'>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" name="lastname" placeholder="Lastname"  [(ngModel)]='lastname'>
      </div>
      <div class="form-group">
        <label>Gender</label>
      </div>
      <!-- Radio and checkboxes work much the same way -->
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Male" [(ngModel)]='gender'>
          Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Female" [(ngModel)]='gender'>
          Female
        </label>
      </div>
      <div class="form-group">
        <label>ROOM CLASS:</label>
          <input type="text" class="form-control" name="roomclass" placeholder="ENTER CLASS OF ROOM"  [(ngModel)]='roomclass'>
      </div>
      <div class="form-group">
        <label>NUMBER OF ROOMS:</label>
          <input type="text" class="form-control" name="noofrooms" placeholder="NUMBER OF ROOMS"  [(ngModel)]='noofrooms'>
      </div>
      <div class="form-group">
      <label>PHONE-NUMBER:</label>
        <input type="text" class="form-control" name="phno" placeholder="phone number"  [(ngModel)]='phno'>
    </div>
    <div class="form-group">
    <label>EMAIL-ID:</label>
      <input type="text" class="form-control" name="emailid" placeholder="EMAIL-ID"  [(ngModel)]='emailid'>
  </div>
      <div class="form-group">
        <button type="submit" class="btn btn-default" (click)="valid()">Submit</button>
      </div>
      <div class="form-group">
      <button type="submit" class="btn btn-default" (click)="computebill()">COMPUTE-BILL</button>
    </div>
    </form>
  
</div>
YOU HAVE TO PAY--------> : {{cost}}

   <div *ngFor="let p of regd">
     NAME:{{p.firstname}} {{p.lastname}} <br>
     GENDER:{{p.gender}}<br>
     ROOM-CLASS:{{p.roomclass}}<br>  
     NO-OF-ROOMS:{{p.noofrooms}}<br>
     PHONE-NUMBER:{{p.phno}}<br>
     EMAIL-ID:{{p.emailid}}
   </div>
  `,
  styleUrls: ['./app.component.css']

})
export class form 
{
  constructor()
  {}
  regd:any[];
 firstname:String;
  lastname:String;
    gender:String;
    roomclass:String;  
    noofrooms:number;
    phno:any;
    emailid:String;
    cost:any;
    
  valid()
  {
    this.regd=[{firstname:this.firstname,lastname:this.lastname,gender:this.gender,roomclass:this.roomclass,noofrooms:this.noofrooms,phno:this.phno,emailid:this.emailid}];
  }

  computebill()
  {
     if(this.roomclass=="executive")
     {
        this.cost= this.noofrooms*2000;
        console.log(this.cost);
     }
     else if(this.roomclass=="suite")
     {
      this.cost= this.noofrooms*1500;
      console.log(this.cost);
     }
     else if(this.roomclass=="stdroom")
     {
      this.cost= this.noofrooms*1000;
      console.log(this.cost);
     }
  }
}