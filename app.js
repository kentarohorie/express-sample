var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var routes = require('./routes/index');
var questions = require('./routes/questions');

app.use(bodyParser())
app.use('/', routes);
app.use('/questions', questions)

module.exports = app;
