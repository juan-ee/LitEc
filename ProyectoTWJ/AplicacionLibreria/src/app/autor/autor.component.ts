import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  private _parametros: any;
  autores=[];
  nuevoAutor= {};

  constructor(private _http: Http,
              private _masterURL: MasterURlService) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Autor")
      .subscribe(
        (res: Response) => {
          this.autores = res.json()
            .map((value) => {
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }
    crearAutor() {
      this._http.post(this._masterURL.url + "Autor", {
        nombres: "Jorge Enrique",
        apellidos: "Adoum",
      }).subscribe(
        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          this.autores.push(res.json());
          this.nuevoAutor = {};
        },
        (err) => {
          console.log("Ocurrio un err or", err);
        },
        () => {
          console.log("Termino la función vamos a las casas")
        }
      );
      this._http.post(this._masterURL.url + "Autor", {
        nombres: "Leopoldo",
        apellidos: "Benítes Vinueza",
      }).subscribe(
        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          this.autores.push(res.json());
          this.nuevoAutor = {};
        },
        (err) => {
          console.log("Ocurrio un err or", err);
        },
        () => {
          console.log("Termino la función vamos a las casas")
        }
      );
      this._http.post(this._masterURL.url + "Autor", {
        nombres: " Eliécer",
        apellidos: "Cárdenas",
      }).subscribe(
        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          this.autores.push(res.json());
          this.nuevoAutor = {};
        },
        (err) => {
          console.log("Ocurrio un err or", err);
        },
        () => {
          console.log("Termino la función vamos a las casas")
        }
      );
      this._http.post(this._masterURL.url + "Autor", {
        nombres: "Jorge",
        apellidos: "Carrera Andrade",
      }).subscribe(
        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          this.autores.push(res.json());
          this.nuevoAutor = {};
        },
        (err) => {
          console.log("Ocurrio un err or", err);
        },
        () => {
          console.log("Termino la función vamos a las casas")
        }
      );
    }

    borrarAutor(id: number) {
      this._http.delete(this._masterURL.url + "Autor/" + id)
        .subscribe(
          (res) => {
            let autorBorrado = res.json();
            this.autores = this.autores.filter(value => autorBorrado.id != value.id);
          },
          (err) => {
            console.log(err);
          }
        )
    }
  }


