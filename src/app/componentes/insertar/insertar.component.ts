import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {FirebaseService} from "../app.firebase.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styles: []
})
export class InsertarComponent implements OnInit {

  private datosUsuario = {
    nombre: '',
    cargo: '',
    descripcion:'',
    key: '',
  };


  constructor(private _firebase:FirebaseService, private _activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
  }

  enviarDatos(){

    this._firebase.peticionPost(this.datosUsuario).subscribe(data => {
      this.datosUsuario.key = data.name;
      //Añadiendo la key al Objeto.
      this._firebase.peticionPut(this.datosUsuario.key, this.datosUsuario).subscribe();
    })



  }

}
