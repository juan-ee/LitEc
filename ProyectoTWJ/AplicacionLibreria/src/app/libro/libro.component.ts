import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
import {ActivatedRoute} from "@angular/router";
import { map } from 'rxjs/operator/map';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  private _parametros: any;
  libros=[];
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterURlService) { }

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        console.log(this._parametros.idLibro);
        this._http.get(this._masterURL.url + 'Libro?id=' + this._parametros.idLibro).subscribe(

          (res: Response) => {
            this.libros = res.json()
              .map((value) => {
                return value;
              });
          },
          (err) => {
            console.log(err);
          }
        )
      })
  }

}
