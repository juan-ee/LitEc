import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompraComponent } from './compra/compra.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import {MasterURlService} from "./services/master-url.service";
import { LibroMostrarComponent } from './libro/libro-mostrar/libro-mostrar.component';
import { LibroInformacionComponent } from './libro/libro-informacion/libro-informacion.component';
import {CarritoService} from "./services/carrito.service";
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    UsuarioComponent,
    HomeComponent,
    LibroMostrarComponent,
    LibroInformacionComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterURlService,
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
