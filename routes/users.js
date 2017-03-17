var express = require('express');
var router = express.Router();

var sql = require('../model/mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  sql.command("SELECT * FROM user");
  res.send('respond with a resource');
});

module.exports = router;
