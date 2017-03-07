import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
import {CarritoService} from "../services/carrito.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  libros=[];
  constructor(private _http:Http,private _masterURL:MasterURlService, private carrito:CarritoService) {

  }

  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros(){
    this._http.get(this._masterURL.url+'libro/buscarLibros?id='+this.carrito.carro)
      .subscribe(
        (res)=>{
          //this.aplicaciones=res.json();
          this.libros=res.json();
          console.log(this.libros);
        },
        (err)=>{
          console.log(err);
        }
      );
  }

}
