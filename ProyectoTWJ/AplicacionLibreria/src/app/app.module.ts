import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { AutorComponent } from './autor/autor.component';
import { CompraComponent } from './compra/compra.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import {MasterURlService} from "./services/master-url.service";

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    AutorComponent,
    CompraComponent,
    UsuarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterURlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
