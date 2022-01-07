var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  console.log('hi');
  res.json({
    "title" : "hi"
  })
});

module.exports = router;
