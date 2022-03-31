var express = require('express');
var router = express.Router();


/* GET computation page. */
router.get('/', function(req, res, next) {
var random = Math.random();
var x;
x = req.query.x;

if (x == undefined) {
  x = random;
}

let hypot = Math.hypot(x) 
let ceil = Math.ceil(x)
let clz32 = Math.clz32(x) 

res.render('computation', {
  title: 'Computation of Math functions',
  values: `Math.hypot(),Math.ceil(),Math.clz32() are applied to ` + x + ` is ` + hypot + `,` + ceil + `,` + clz32 
});
});

module.exports = router;