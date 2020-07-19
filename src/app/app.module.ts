import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './auth/http.service';
import { NoopInterceptor } from './auth/noop.interceptor';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ShareModule } from './dynamic-banner/share.module';
@NgModule({
   imports: [
      ShareModule,
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   declarations: [
      AppComponent,
      LoginComponent,
      AdvertisementComponent
   ],
   
   providers: [
      HttpService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
