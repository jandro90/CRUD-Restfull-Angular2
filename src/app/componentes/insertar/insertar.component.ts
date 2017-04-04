import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {FirebaseService} from "../app.firebase.service";

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

  constructor(private _firebase:FirebaseService) { }

  ngOnInit() {
  }

  enviarDatos(){
   this._firebase.peticionPost(this.datosUsuario).subscribe(data => {
     console.log(data);
   })
  }

}
