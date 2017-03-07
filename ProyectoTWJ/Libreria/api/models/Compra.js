/**
 * Compra.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    subtotal:{
      type:'float'
    },
    iva:{
      type:'float'
    },
    total:{
      type:'float'
    },

    idUsuario:{
      model:"Usuario"
    },

    libros: {
      collection: 'Libro',
      via: 'compras',
      dominant: true
    }

  }
};

