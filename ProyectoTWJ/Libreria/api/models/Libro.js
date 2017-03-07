/**
 * Libro.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    titulo:{
      type:'string'
    },
    categoria:{
      type:'string',
      enum:['Terror','Suspenso','Amor','Erotismo','Ciencia Ficcion']
    },
    editorial:{
      type:'string'
    },
    precio:{
      type:'float'
    },
    isbn:{
      type:'string'
    },

    idAutor:{
      model:"Autor"
    },

    compras: {
      collection: 'Compra',
      via: 'libros'
    }
  }
};

