
/* GET home page. */
module.exports = function (app) {

	app.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});
	app.get('/w', function(req, res, next) {
	  res.render('index', { title: 'dd' });
	});
	app.get('/d', function(req, res, next) {
	  res.render('index', { title: 'dd' });
	});
	app.get('/*', function(req, res, next) {
	  res.send('sss')
	});
}

