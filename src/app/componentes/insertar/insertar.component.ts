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

  private spinner:boolean = false;
  private msgError:boolean = false;
  private msgSucces:boolean = false;


  constructor(private _firebase:FirebaseService, private _activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
  }

  enviarDatos(){
    //comprobando si el usuario ha completado algo!

    if(this.datosUsuario.nombre.length >=3 && this.datosUsuario.cargo.length >=3){
      //Efecto Spiner boton guardar.
      setTimeout( () =>{
        this.spinner = true;
      });
      setTimeout( () =>{
        this.spinner = false;
      },3000);

      //Conectando con el servicio para insertar Registro.
      this._firebase.peticionPost(this.datosUsuario).subscribe(data => {
        this.datosUsuario.key = data.name;
        //Añadiendo la key al Objeto.
        this._firebase.peticionPut(this.datosUsuario.key, this.datosUsuario).subscribe();
      });

      this.msgError = false;

      setTimeout( () =>{
        this.msgSucces = true;
      },3000);

      setTimeout( () =>{
        this._router.navigate(['/datos']);
      },10000);
    } else{
      //mostrando mensaje de error si el usuario no completa los campos.
      this.msgError = true;

    }




  }

}
