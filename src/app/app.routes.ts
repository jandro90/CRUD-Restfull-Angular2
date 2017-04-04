import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {DatosComponent} from "./componentes/datos/datos.component";
import {InsertarComponent} from "./componentes/insertar/insertar.component";
import {EditarComponent} from "./componentes/editar/editar.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'registro/:id', component: InsertarComponent },
  { path: 'editar/:key', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
