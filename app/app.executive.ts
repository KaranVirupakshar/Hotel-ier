import { Component } from '@angular/core';
import {form} from './app.form';
import { Router } from '@angular/router'; 
import { appRouterModule } from "./app.route1";
import { RouterModule,Routes} from "@angular/router";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-root1',
  template: `
  <h2> EXECUTIVE rooms Availability Details </h2>
  <br>
  <br>
  <div> 
       <table width="50%" border="3" >
       <tr>
                <th>ROOM-CLASS</th>
                <th>NO-OF-BEDROOMS</th>
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
export class executive {
  customer:any[]=[{name:"EXECUTIVE",day:"2",time:"24 HOURS"},{name:"EXECUTIVE",day:"1",time:"24 HOURS"},{name:"EXECUTIVE",day:"2",time:"24 HOURS"}];

}
