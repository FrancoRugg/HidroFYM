var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/carrousel', function(req, res, next) {
  res.render('carrousel', { title: 'Carrousel' });
});

module.exports = router;
