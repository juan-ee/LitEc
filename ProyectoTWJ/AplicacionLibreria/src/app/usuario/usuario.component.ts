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
  constructor(private _http: Http, private _masterURL: MasterURlService, private router:Router) {
    this.usuario={};
  }

  ngOnInit() {
    this._http.get(this._masterURL.url+'usuario/1').subscribe(
      (res)=>{
        this.usuario=res.json();
        this.total=this.usuario.compras.length;
      },
      (err) => {
        alert("Ocurrio un error"+err.toString());
      }
    );
  }




}
