/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    nickname:{
      type:'string',
      unique:true
    },
    password:{
      type:'string'
    },
    nombres:{
      type:'string'
    },
    apellidos:{
      type:'string'
    },

    compras:{
      collection:"Compra",
      via:"idUsuario"
    }
  }
};

