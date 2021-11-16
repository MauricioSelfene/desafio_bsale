var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");


/* seleccion.ejs */
router.get('/:id', function(req, res, next) {

    
    var  userId  = req.params.id ; 
    console.log(userId);
    db.query("SELECT * FROM bsale_test.product where category = ?", [userId], function(err, resultados){
        console.log(resultados);



        res.render('seleccion', { title: 'Seleccion ...', Select:resultados });
    });

    //
    //res.render('productos', { title: 'Productos ...' });
  });

module.exports = router;
    