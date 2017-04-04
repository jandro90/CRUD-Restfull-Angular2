import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../app.firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styles: []
})
export class DatosComponent implements OnInit {

  private datosMostrar:any[] = [];
  private eliminando:boolean = false;

  constructor(private _firebase:FirebaseService, private _router:Router) { }

  ngOnInit() {
    this._firebase.peticionGet().subscribe(data => {
      for (let key$ in data ){
        this.datosMostrar.push(data[key$]);
      }
    });

  }


  editar(keyz:string){
    this._router.navigate(['/editar/',keyz]);
  }

  eliminar(keyz:string){
    this._firebase.eliminarDelete(keyz).subscribe();

    this.eliminando = true;

    setTimeout( () => {
      window.location.reload();
    },3000);
  }
}
