import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { AppComponent1 } from './app.comp1';
import { AppComponent2 } from './app.comp2';
import { AppComponent3 } from './app.comp3';
import { executive } from './app.executive';
import { suite } from './app.suite';
import { stdroom } from './app.stdroom';
import { appRouterModule } from "./app.route1";
//import { HighlightDirective } from './app.directive';
import { dirdispComponent1 } from './app.derectivedisp';
import {mathComponent  } from './app.maths';
import {calciComponent1  } from './app.calci';
import {Appcomponent4} from './app.comp4';
import {login} from './app.login';
import {form} from './app.form';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,AppComponent1,AppComponent2,Appcomponent4,calciComponent1 ,executive,stdroom,suite,login,form
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
   
  ],

  providers: [mathComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
