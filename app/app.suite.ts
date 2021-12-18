import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `
  <h2> STANDARD-ROOM Availability Details </h2>
  <br>
  <br>
  <div> 
       <table width="50%" border="3" >
       <tr>
                <th>ROOM_CLASS</th>
                <th>NO_OF_BEDROOMS_AVAILABLE</th>
                <th>HOT_WATER_AVAILABLE_FOR</th> 
                <th>BOOK</th> 
                
                 
        </tr>
       <tr *ngFor="let pp of customer">
         <td>{{pp.name}}</td>
         <td>{{pp.day}}</td>
         <td>{{pp.time}}</td>
         <td><input type="button" value="Appointment"  [routerLink]="['/form']"></td>
  
            
       </tr>
       </table>
  </div>
  <!-- Router Outlet -->
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']

})
export class suite {
  customer:any[]=[{name:"Rajesh",day:"Monday",time:"12:30 PM"},{name:"vijay",day:"Tuesday",time:"10.00 AM"},{name:"Pallavi",day:"Wednesday",time:"11:30 AM"}];

}