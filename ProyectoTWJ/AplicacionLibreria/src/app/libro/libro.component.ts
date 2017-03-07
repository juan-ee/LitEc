import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  private _parametros: any;
  book;
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
            console.log("No hubo Errores");
            this.book = res.json();
            console.log(this.book.titulo);
          },
          (err) => {
            console.log(err);
          }
        )
      })
  }

}
