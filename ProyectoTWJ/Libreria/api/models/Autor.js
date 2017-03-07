/**
 * Autor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    nombres:{
      type:'string'
    },
    apellidos:{
      type:'string'
    },
    libros:{
      collection:"Libro",
      via:"idAutor"
    }
  }
};

