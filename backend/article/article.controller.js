const express = require('express');
const router = express.Router();
const articleService = require('./article.service');
const authorize = require('_middleware/authorize');
const db = require('_helpers/db');



router.post('/create', authorize(), createarticle);
router.get('/:id', authorize(), getarticle);

module.exports = router;

  function createarticle(req, res, next) {
    articleService.create(req.body)
        .then(() => res.json({ message: 'Creation successful' }))
     .catch(next);
}

function getarticle(req, res, next) {
  articleService.getArtById(req.params.id)
      .then(Article => res.json(Article))
      .catch(next);
}
