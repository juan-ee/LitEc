import { Component, OnInit } from '@angular/core';
import {MasterURlService} from "../services/master-url.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private rutas:string[];
  libros:any[];

  constructor(private _http:Http,private _masterURL:MasterURlService) {
    this.rutas=['assets/images/1.jpg','assets/images/2.png','assets/images/3.png','assets/images/4.jpg','assets/images/5.jpg']
  }
  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros(){
    this._http.get(this._masterURL.url+"libro")
      .subscribe(
        (res)=>{
          this.libros=res.json().map((value) => {
            value.ruta = this.ruta;
            return value;
          });
        },
        (err)=>{
          alert("Ocurrio un error"+err.toString());
        },
      );
  }

  get ruta():string{
    return this.rutas[Math.floor(Math.random()*this.rutas.length)];
  }
}
