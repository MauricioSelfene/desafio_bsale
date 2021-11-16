var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion")


/* productos.ejs */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM bsale_test.category", function(err, resultados){
        console.log(resultados);

        res.render('productos', { title: 'Productos ...', Product:resultados });
    });

    //
    //res.render('productos', { title: 'Productos ...' });
  });

module.exports = router;
    