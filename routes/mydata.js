var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Prudhvi Reddy',fact: 'I Like watching Movies' });
});

module.exports = router;
