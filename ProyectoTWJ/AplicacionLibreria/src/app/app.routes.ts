import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {AutorComponent} from "./autor/autor.component";
import {LibroComponent} from "./libro/libro.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'autor', component: AutorComponent},
  {path: 'libros', component: LibroComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

