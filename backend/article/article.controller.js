const express = require('express');
const router = express.Router();
const articleService = require('./article.service');
const authorize = require('_middleware/authorize');
const db = require('_helpers/db');
const multer = require('multer');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads');
   },
  filename: function (req, file, cb) {
      cb(null , getRandomInt(999999999999) + file.originalname);
  }
});

const upload = multer({storage: storage})



router.post('/create', authorize(), upload.single('artimg'), createarticle);
router.get('/auction', authorize(),getactive);
router.get('/:id', authorize(), getArtById);

module.exports = router;

  function createarticle(req, res, next) {
      
    let complarticle = Object.assign(req.body, req.file)

    articleService.create(req.body)
        .then(() => res.json({ message: 'Creation successful' }))
     .catch(next);
}

function getArtById(req, res, next) {
  articleService.getArtById(req.params.id)
      .then(Article => res.json(Article))
      .catch(next);
}

  function getactive(req, res, next){
  articleService.getArtactive()
  .then(Article => res.json(Article))
  .catch(next);

}

