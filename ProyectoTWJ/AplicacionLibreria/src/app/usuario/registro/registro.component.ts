import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.component.html',
  styleUrls: ['registro.component.css']
})
export class RegistroComponent implements OnInit {
  private _parametros: any;
  usuarios=[];
  nuevoUsuario= {};
 constructor(private _http: Http,
              private _masterURL: MasterURlService) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Autor")
      .subscribe(
        (res: Response) => {
          this.usuarios= res.json()
            .map((value) => {
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }
  crearAutor(formulario: NgForm) {
    this._http.post(this._masterURL.url + "Autor", {
      nombres: formulario.value.nombres,
      apellidos:formulario.value.apellidos,
      nickname: formulario.value.nickname,
      password: formulario.value.password,
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.usuarios.push(res.json());
        this.nuevoUsuario = {};
      },
      (err) => {
        console.log("Ocurrio un err or", err);
      },
      () => {
        console.log("Termino la función vamos a las casas")
      }
    );

  }

}



