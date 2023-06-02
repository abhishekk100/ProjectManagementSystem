import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FeatureModule } from './feature/feature/feature.module';
import { UserModule } from './User/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    FeatureModule,
    UserModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
