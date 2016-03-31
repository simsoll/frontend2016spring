var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/'));

app.post('/', function(req, res, next) {
  res.json(req.body);
});

<<<<<<< HEAD
app.listen(3000);

=======
app.listen(4000);
>>>>>>> Added solutions to AJAX exercise 1 and AJAX exercise 2
