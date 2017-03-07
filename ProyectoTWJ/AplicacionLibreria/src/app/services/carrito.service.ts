import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService {
  libros_carro:number[];

  constructor() {
    this.libros_carro=[];
    //this.libros_carro.push(182);
  }

  agregarLibro(id:number){
    if(this.libros_carro.indexOf(id)==-1){
      this.libros_carro.push(id);
    }
    console.log('libros',this.libros_carro);
  }

  get carro():number[]{
    return this.libros_carro;
  }

  setearCarro(){
    this.libros_carro=[];
  }

}
