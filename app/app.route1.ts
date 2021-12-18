import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent1 } from './app.comp1';
import { AppComponent2 } from './app.comp2';
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';
import { executive} from './app.executive';
import { suite } from './app.suite';
import { stdroom } from './app.stdroom';
import {login} from './app.login';
import {form} from './app.form';

const routes:Routes = [
	{ path: 'executive', component:executive},
	{ path: 'stdroom', component:stdroom } ,
	{ path: 'suite', component:suite},
	{ path: 'login', component:login},
	{ path: 'form', component:form},
	{ path: '', redirectTo: 'component-one', pathMatch: 'full' }
];



export const appRouterModule = RouterModule.forRoot(routes);
