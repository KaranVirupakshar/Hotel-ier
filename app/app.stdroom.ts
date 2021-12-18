import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `
  <h2>SUITE-CLASS Availability Details</h2>
  <br>
  <br>
  <div> 
       <table width="50%" border="3" >
       <tr>
                <th>ROOM-CLASS</th>
                <th>NO_OF_ROOMS_AVAILABLE</th>
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
  `,
  styleUrls: ['./app.component.css']

})
export class  stdroom {
  customer:any[]=[{name:"SUITE",day:"3",time:"12 HOURS"},{name:"SUITE",day:"2",time:"10 HOURS"},{name:"SUITE",day:"2",time:"12 HOURS"}];

}