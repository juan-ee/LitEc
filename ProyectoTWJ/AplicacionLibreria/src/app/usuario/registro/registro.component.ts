import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURlService} from "../../services/master-url.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.component.html',
  styleUrls: ['registro.component.css']
})
export class RegistroComponent implements OnInit {
  nuevoUsuario= {};
 constructor(private _http: Http,
              private _masterURL: MasterURlService,private router:Router) { }

  ngOnInit() {
  }

  crearUsuario() {
    this._http.post(this._masterURL.url + "usuario",this.nuevoUsuario).subscribe(
      (res) => {
        console.log('Se creo:',res.json());
        this.router.navigate(['/home']);
        this.nuevoUsuario={};
      },
      (err) => {
        alert("Ocurrio un error"+err.toString());
      }
    );
  }

}



