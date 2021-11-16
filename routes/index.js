var express = require('express');
var router = express.Router();

/* index.ejs */
router.get('', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* nosotros.ejs */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos ...' });
});




module.exports = router;
