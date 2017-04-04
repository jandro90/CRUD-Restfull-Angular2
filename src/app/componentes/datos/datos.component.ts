import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../app.firebase.service";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styles: []
})
export class DatosComponent implements OnInit {

  constructor(private _firebase:FirebaseService) { }

  ngOnInit() {
    this._firebase.peticionGet().subscribe(data => {
      console.log(data);
    })
  }


}
