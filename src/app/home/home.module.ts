import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    HomeRoutes,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    FirstComponent,
    SecondComponent
  ],
  exports: [
  ],
  providers: [
  ],
})
export class HomeModule { }
