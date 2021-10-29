const express = require('express');
const router = express.Router();
const articleService = require('./article.service');



router.get('/create', (req, res)=>{ 

    const name = req.body.name

    res.send(name);
  });





  module.exports = router;