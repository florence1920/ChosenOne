var express = require('express');
var router = express.Router();
var Closet = require('../models/Closet.js')

router.get('/', async(req, res, next)=> {
  const closet = await Closet.find({});
  res.json(closet);

});

router.post('/edit', async(req, res, next)=> {
  const cloth = new Closet(req.body);
  console.log(cloth);
  cloth.save((err)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
    })
  })
});

router.delete('/edit', async(req, res, next)=> {
  try {
    const removed = await Closet.findOneAndRemove({
      cloName : req.body.cloName
    })
    res.json({
      removed
    })
  } catch (error) {
    res.status(500).json({message : err.message})
  }
});

module.exports = router;
