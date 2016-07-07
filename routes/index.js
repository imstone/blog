var express = require('express');
var router = express.Router();

/* GET home page. */
moudule.exports = function (app) {
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	  res.end();
	});
	router.get('/w2', function(req, res, next) {
	  res.send('sss')
	  res.end();
	});
}

module.exports = router;
