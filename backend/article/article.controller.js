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



router.post('/create', authorize(), createarticle,);
router.post('/imgupload', authorize(),  upload.single('fileimg'),  imgupload,)
router.get('/auction', authorize(),getactive);
router.get('/:id', authorize(), getArtById);

module.exports = router;

  function createarticle(req, res, next) {
  
    console.log(req)
      
    let theusername = {"username" : req.user.username}
    let complarticle = Object.assign(req.body, theusername)

    articleService.create(complarticle)
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

function imgupload(req, res, next){

articleService.upload(req.file.filename)
.then(Article => res.json(Article))
.then(Article => res.derfilename)
.catch(next);
}

