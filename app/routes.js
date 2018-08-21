var express = require('express');
var router = express.Router();
var path = require('path');

module.exports = router;

router.get('/', function(req,res){
	//res.send('home page is under construction');
	res.sendFile(path.join(__dirname, '../pages/index.html'));
});

router.get('/about_me', function(req,res){
	//res.send('about me page is under construction');
	res.sendFile(path.join(__dirname, '../pages/about_me.html'));
});

router.get('/projects', function(req,res){
	//res.send('about me page is under construction');
	res.sendFile(path.join(__dirname, '../pages/projects.html'));
});

