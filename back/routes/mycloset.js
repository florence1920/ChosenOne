var express = require('express');
var router = express.Router();
var Closet = require('../models/Closet.js')

router.get('/', async(req, res, next)=> {
  const closet = await Closet.find({});
  console.log(closet);
  res.json(closet);

});

module.exports = router;
