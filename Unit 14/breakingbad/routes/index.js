var express = require('express');
var router = express.Router();
var appdata = require("../breaking_bad.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'List' });
});

module.exports = router;
