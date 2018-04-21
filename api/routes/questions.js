var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.Question.findAll().then(function(questions) {
    res.send({
      questions: questions
    })
  })
})

router.post('/', function(req, res) {
  models.Question.create({
    title: req.body.title
  }).then(function() {
    res.send({
      status: 'success'
    })
  })
})

module.exports = router;
