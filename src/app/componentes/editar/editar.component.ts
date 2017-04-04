import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../app.firebase.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {

  private datosUsuario = {
    nombre: '',
    cargo: '',
    descripcion: '',
    keyz:''
  };

  private key:string;
  private espera:boolean = false;

  constructor(private _firebase:FirebaseService, private _activatedR:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._activatedR.params.subscribe(params => {
      this.datosUsuario.keyz = params['key'];
      this.key = params['key'];
    })
  }

  enviarDatos(){
    this._firebase.insertarEdicion(this.key, this.datosUsuario).subscribe();
    this.espera = true;
    setTimeout( ()=> {
      this._router.navigate(['/datos']);
    },3000)
  }

}
