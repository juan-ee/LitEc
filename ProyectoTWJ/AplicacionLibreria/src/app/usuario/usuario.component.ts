import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {MasterURlService} from "../services/master-url.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario;
  total:number;
  libros;
  constructor(private _http: Http, private _masterURL: MasterURlService, private router:Router) {
    this.usuario={};
    this.libros=[];
  }

  ngOnInit() {
    this._http.get(this._masterURL.url+'usuario/1').subscribe(
      (res)=>{
        this.usuario=res.json();
        this.total=this.usuario.compras.length;
        this._http.get(this._masterURL.url+'usuario/consultarlibros?id='+this.usuario.id).subscribe(
          (res)=>{
            this.libros=res.json();
            console.log(this.libros);
          },
          (err) => {
            alert("Ocurrio un error"+err.toString());
          }
        );
      },
      (err) => {
        alert("Ocurrio un error"+err.toString());
      }
    );


  }




}
