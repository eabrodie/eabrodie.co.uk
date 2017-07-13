"use strict";
var fs = require("fs");

var express = require("express");

var app = express();

app.get("/", function(req, res, next) {
  res.render("index.pug");
});

app.get("/about", function(req, res, next) {
  res.render("about.pug");
});

app.get("/portfolio", function(req, res, next) {
  res.render("portfolio.pug");
});

app.get("/style.css", function(req, res, next) {
  res.type("css");
  res.send(
    fs.readFileSync(__dirname + "/style/normalize.css", "utf8") +
      fs.readFileSync(__dirname + "/style/style2.css", "utf8")
  );
});

module.exports = app.listen(3000);
