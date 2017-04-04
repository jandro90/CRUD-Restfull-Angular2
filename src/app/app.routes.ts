import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {DatosComponent} from "./componentes/datos/datos.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'datos/:id', component: DatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
