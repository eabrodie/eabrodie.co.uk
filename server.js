'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/second.html', function (req, res, next) {
  res.sendFile(__dirname + '/second.html');
});

module.exports = app.listen(3000);
