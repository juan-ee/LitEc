import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {LibroMostrarComponent} from "./libro/libro-mostrar/libro-mostrar.component";
import {LibroInformacionComponent} from "./libro/libro-informacion/libro-informacion.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'libros', component: LibroMostrarComponent},
  {path: 'libro/:id/:ruta', component: LibroInformacionComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

