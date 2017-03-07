/**
 * LibroController
 *
 * @description :: Server-side logic for managing libroes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  buscarLibros:function (req,res) {
    Libro.find({
      where: {id: req.param('id').split(',')},
    }).exec(function (err,libros) {
      if(err){
        console.log('Hubo error',err.message);
      }
      return res.json(libros);
    });
  }
};

