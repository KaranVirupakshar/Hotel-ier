import { Component } from '@angular/core';
import { appRouterModule } from "./app.route1";
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { executive} from './app.executive';
import { suite } from './app.suite';
import { stdroom } from './app.stdroom';
@Component({
  selector: 'app-root4',
  template: `
  <h1>WELCOME TO ONLINE HOTEL BOOKING</h1>
  <br>
     <div> 
            
            
            <input type="button" value="EXECUTIVE"  [routerLink]="['./executive']">
            <input type="button" value="SUITE"  [routerLink]="['./suite']">
            <input type="button" value="STANDARD ROOM"  [routerLink]="['./stdroom']">
            <input type="button" value="GO TO HOME-PAGE"  [routerLink]="['']">
            <br>
            
            
            
         
     </div>
    <!-- Router Outlet -->
    <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app works!';
}
