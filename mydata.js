var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Narendar reddy katta',fact: 'I am good at Badminton' });
});

module.exports = router;
