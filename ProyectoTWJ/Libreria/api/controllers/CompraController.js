/**
 * CompraController
 *
 * @description :: Server-side logic for managing compras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  registrarCompra:function (req,res) {
    var parametros=req.allParams();
    // console.log(parametros);
    Compra.create({
      total:parametros.total.toFixed(2),
      idUsuario:parametros.idUsuario,
    }).exec(function (err,compra) {
      if(err){
        console.log('Error',err.message)
      }
      for(var i in parametros.libros){
        compra.libros.add(parametros.libros[i]);
      }
      compra.save(function(err) {});
      return res.json(compra);
    })
  }

};

