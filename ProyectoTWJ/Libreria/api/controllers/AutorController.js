/**
 * AutorController
 *
 * @description :: Server-side logic for managing autors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  llenarAutores:function (req,res) {
    var cat=['Terror','Suspenso','Amor','Erotismo','Ciencia Ficcion'];
    var aut=['Guillermo','Gabriel','Mario','Augusto','Jorge'];
    var app=['Larrea','Arias','Dominguez','Paez','Icaza','Benitez','Caiza','Gonzalez','Benalcazar','Paz'];

    for(var i=0;i<10;i++){
      Autor.create({
        nombres:aut[Math.floor(Math.random()*aut.length)],
        apellidos:app[Math.floor(Math.random()*app.length)]
      }).exec(function (err,autor) {
        console.log(autor)
        for(var j=1;j<4;j++){
          Libro.create({
            titulo:"Libro"+j,
            categoria:cat[Math.floor(Math.random()*cat.length)],
            editorial:"Editorial Ecuador",
            precio:(Math.random()*10+5).toFixed(2),
            idAutor:autor
          }).exec(function (err,libro) {
            console.log(libro);
          });
        }
      });
    }
    return res.ok();
  }

};

