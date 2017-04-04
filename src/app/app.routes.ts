import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {DatosComponent} from "./componentes/datos/datos.component";
import {InsertarComponent} from "./componentes/insertar/insertar.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'registro/:id', component: InsertarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
