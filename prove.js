const express = require('express');
var priceEngine = require('./prices.js');

var app = express();
app.set('port', process.env.PORT || 5000)
	.use(express.static(__dirname + '/public'))
	.set('views', __dirname + '/views')
	.set('view engine', 'ejs')
.get('/stamp', priceEngine.stampPrice)
	.listen(app.get('port'), function(){
		console.log('Listening on Port: ' + app.get('port'))
	});

