var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('ルート')
})

module.exports = router;
