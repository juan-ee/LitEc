/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  consultarLibros:function (req,res) {
    Compra.find({idUsuario:req.param('id')}).populate('libros').exec(function (err,us) {
      if(err){
        console.log(err.message);
      }

      var libros=us.reduce((reducido,valor)=>{
        valor.libros.forEach((libro)=>{
          reducido.push({
            titulo:libro.titulo,
            categoria:libro.categoria,
            editorial:libro.editorial,
            autor:Autor.findOne({id:libro.idAutor}).exec(function (err,autor) {
              console.log(autor);
              return autor.nombres+" "+autor.apellidos;
            })
          })
        })



      return reducido;
        },[]);
      console.log(libros);
      return res.json(libros);
    });
  }

};

