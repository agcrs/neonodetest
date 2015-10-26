var express = require('express');
var router = express.Router();
var person = require('../model/person');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testdb', function(req, res, next) {
  res.render('testdb', {
    title: 'Database Testing',
    result: person.testQuery()
  });
});

module.exports = router;
