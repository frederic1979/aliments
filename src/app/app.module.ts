import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CalulatorComponent } from './calulator/calulator.component';
import { AlimentsListComponent } from './aliments-list/aliments-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CalulatorComponent,
    AlimentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule,
    RouterModule.forRoot([

      { path: 'cal', component: CalulatorComponent },
      { path: 'ali', component: AlimentsListComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
