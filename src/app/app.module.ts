import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   imports: [
      BrowserModule,
      
      AppRoutingModule
   ],
   declarations: [
      AppComponent,
      LoginComponent
   ],
  
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
