import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {RoutingModule} from "./app.routes";
import { HomeComponent } from './componentes/home/home.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { InsertarComponent } from './componentes/insertar/insertar.component';
import {FirebaseService} from "./componentes/app.firebase.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DatosComponent,
    InsertarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
