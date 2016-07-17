
/* GET home page. */
var crypto = require('crypto');
var User = require('./models/user')

module.exports = function (app) {

	app.get('/', function(req, res) {
	  res.render('index', { title: '主页a' });
	});
	app.get('/reg', function(req, res) {
	  res.render('reg', { title: '注册' });
	});
	app.post('/reg', function(req, res) {
		var name = req.body.name,
			password = req.body.password,
			password_re = req.body['password-repeat'];
		if (password != password_re) {
			req.false('error', '两次输入的密码不一致');
			return res.redirect('/reg');
		}
		var md5 = crypto.createHash('md5'),
			password = md5.update(password).digest('hex');

	  
	});
	app.get('/login', function(req, res) {
	  res.render('login', { title: '登录' });
	});
	app.post('/login', function(req, res) {
	  
	});
	app.get('/post', function(req, res) {
	  res.render('post', { title: '登录' });
	});
	app.get('/post', function(req, res) {
	  res.render('post', { title: '登录' });
	});
}

