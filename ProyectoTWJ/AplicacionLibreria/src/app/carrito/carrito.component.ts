import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
import {CarritoService} from "../services/carrito.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  total:number;

  libros=[];
  constructor(private _http:Http,private _masterURL:MasterURlService, private carrito:CarritoService, private router:Router) {
    this.total=0;
  }

  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros(){
    this._http.get(this._masterURL.url+'libro/buscarLibros?id='+this.carrito.carro)
      .subscribe(
        (res)=>{
          //this.aplicaciones=res.json();
          this.libros=res.json().map((value) => {
            this.total+=value.precio;
            return {
              id:value.id,
              titulo:value.titulo,
              precio:value.precio,
              num:1
            };
          });;
          console.log(this.libros);
        },
        (err)=>{
          console.log(err);
        }
      );
  }

  realizarCompra(){
    //this.carrito.setearCarro();
    //this.router.navigate(['/home']);
  }

  cambiarTotalNum(event, lib){
//    alert(event.target.value);
    var act=event.target.value;
    if(act<lib.num){
      this.total-=(lib.num-act)*lib.precio;
    }else{
      this.total+=(act-lib.num)*lib.precio;
    }

    lib.num=act;
  }

  quitarLibro(libro){
    this.total-=libro.num*libro.precio;
    this.libros.splice(this.libros.indexOf(libro),1);
    this.carrito.libros_carro.splice(this.carrito.libros_carro.indexOf(libro.id),1);
  }


}
