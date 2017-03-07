import { Component, OnInit } from '@angular/core';
import {MasterURlService} from "../services/master-url.service";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  libros=[];
  constructor(private _http: Http,
              private _masterURL: MasterURlService) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Libro")
      .subscribe(
        (res: Response) => {
          this.libros = res.json();
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
