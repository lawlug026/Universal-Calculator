import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from'@angular/http';
import { AppComponent }   from './app.component';
import { TempComponent }   from './temp/temp.component';
import { IntCalcComponent }   from './interstcalc/intcalc.component';

const appRoutes: Routes = [
   { path: 'Interest', component: IntCalcComponent },
   { path: 'Temperature', component: TempComponent },
   { path: '**', component: AppComponent}
];



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  providers: 	[],
  declarations: [ AppComponent, IntCalcComponent, TempComponent ],
  bootstrap:    [ AppComponent]
})

export class AppModule { }