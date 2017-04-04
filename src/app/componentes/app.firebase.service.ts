import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()
export class FirebaseService {

  constructor(private _http:Http) { }

  peticionPost(datosUsuario:any){

    let urlPost = 'https://fireapp-83078.firebaseio.com/datos.json';
    let body = JSON.stringify(datosUsuario);

    return this._http.post(urlPost,body).map(res => {
      console.log(res.json());
      return res.json();
    })

  }

  peticionPut(key:string, datosUsuario:any){
    let urlPut = `https://fireapp-83078.firebaseio.com/datos/${key}.json`;
    let body = JSON.stringify(datosUsuario);

    return this._http.put(urlPut,body).map(res => {
      console.log(res.json());
    })
  }

  peticionGet(){
    let urlGet = 'https://fireapp-83078.firebaseio.com/datos.json';

    return this._http.get(urlGet).map(res => {
      return res.json();
    })
  }

  insertarEdicion(key:string, datosUsuario:any){
    let urlEditar:string = `https://fireapp-83078.firebaseio.com/datos/${key}.json`;
    let body = JSON.stringify(datosUsuario);

    return this._http.put(urlEditar,body).map(res=>{
      console.log(res.json());
    })
  }

  eliminarDelete(keyz:string){

    let urlDelete:string = `https://fireapp-83078.firebaseio.com/datos/${keyz}.json`;

    return this._http.delete(urlDelete).map(res => {
      console.log(res.json())
    })
  }

}
