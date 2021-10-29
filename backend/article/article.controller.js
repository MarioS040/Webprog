
const express = require('express');
const router = express.Router();



router.post('/create/:id', (req, res)=>{ 

    res.send('Birds home page');
    req
  });





  module.exports = router;