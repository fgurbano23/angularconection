import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProtectedComponent } from './components/protected/protected.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
