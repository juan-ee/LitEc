import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURlService} from "../../services/master-url.service";

@Component({
  selector: 'app-libro-mostrar',
  templateUrl: './libro-mostrar.component.html',
  styleUrls: ['./libro-mostrar.component.css']
})
export class LibroMostrarComponent implements OnInit {

  private rutas:string[];
  libros:any[];

  constructor(private _http:Http,private _MasterURlService:MasterURlService) {
    this.rutas=['assets/images/1.jpg','assets/images/2.png','assets/images/3.png','assets/images/4.jpg','assets/images/5.jpg']
  }

  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros(){
    this._http.get(this._MasterURlService.url+"libro")
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
