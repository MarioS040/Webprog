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
      cb(null , getRandomInt(9999999999999999) + file.originalname);
  }
});

const upload = multer({storage: storage})


//Konfiguration der Endpoints für die articles, somit werden mit den entsprechenden Befehlen die FUnktionen aufgerufen. alle routen mit Authorize() benötigen einen gültigen Token
router.post('/create', authorize(), createarticle);     
router.post('/imgupload', authorize(),  upload.single('fileimg'), imgupload) 
router.post('/createyabeart', authorize(), createarticleyabe);    //yabeartikel hochladen, nur möglich für user, die in der userdatenbank mit yabeempl = true gespeichert sind
router.post('/upload', authorize(),  upload.single('fileimg'), articleupload)  //Artikel hochladen
router.post('/yabeupload', authorize(),  upload.single('fileimg'), yabeeupload) 
router.get('/auction', authorize(),getactive);          //bekommen aller Artikel, die bei der aktuellen Zeit zwischen timeforauctionA und timeforauctionE legen
router.post('/bieten/:id', authorize(),artbieten);       //bieten auf einen Artikel
router.get('/getyabeart', getyabeart);     //bekommen der ARtikel die in der Datenbank mit yabeart = true
router.get('/myuploads', authorize(), getuploads);
router.get('/mybuys', authorize(), getbuys);       // bekommen deer selbst hochgeladenen Artikel
router.get('/search', authorize(), searcharticle);    //suchen anhand des Querys nach dem ?
router.delete('/:id', authorize(), deletearticle);   //löschen eines Artikels
router.put('/:id', authorize(), updatearticle);  //Artikel update
router.get('/:id',getArtById);     //bekommen der Artikel angaben für einen Artikel mit der ID


module.exports = router;

function searcharticle(req, res, next){
  /*searcQUery beeinhaltet alles nach search= in der URL, somit kann nach einer beliebigen Variable gesucht werden
  SELECT * FROM articles WHERE articleName Like '%irgendwas%' somit werden alle Artikel ausgegeben, die ähnlich des Search Querys sind
  */
  const searchQuery = req.query.search;
 
  articleService.search(searchQuery)
  .then(Article => res.json(Article))
  .catch(next);

}


function updatearticle(req, res, next){
  articleService.updateearticlebyid(req.params.id, req.user.username, req.body)
  .then(Article => res.json(Article))
  .catch(next);

}

function deletearticle(req, res, next){
  
  articleService.deletearticlebyid(req.params.id, req.user.username)
  .then(Article => res.json(Article))
  .catch(next);

}


function getuploads(req, res, next){
articleService.getmyuploads(req.user.username)
.then(Article => res.json(Article))
.catch(next);
}

function getbuys(req, res, next){
  articleService.getmybuys(req.user.username)
  .then(Article => res.json(Article))
  .catch(next);
  }

function getyabeart(req, res, next){
articleService.getallyabeart()
.then(Article => res.json(Article))
.catch(next);

}

function artbieten(req, res, next){

  articleService.artbietenbyid(req)
  .then(() => res.json({ message: 'bieten erfogreich' }))
  .catch(next);

}

function createarticleyabe(req, res, next) {
//zusätzlich, so ist es für nicht yabeemployes nicht möglich yabeartikel hochzuladen

  articleService.uploadyabeart(req)
  .then(() => res.json({ message: 'Artikel erfolgreich angelegt' }))
   .catch(next);

}


  function createarticle(req, res, next) {
    //notyabeart zur Sichherit, so kann keiner beliebig über die REST-API das Property "yabert" : true mitsenden 
    let notyabeart = {"yabeart" : "false"} 
    let theusername = {"username" : req.user.username}
    let complarticle = Object.assign(req.body, theusername, notyabeart)

    articleService.create(complarticle)
    .then(() => res.json({ message: 'Artikel erfolgreich angelegt' }))
    .catch(next);
}

function getArtById(req, res, next) {
  console.log(req)
  articleService.getArtById(req.params.id)
      .then(Article => res.json(Article))
      .catch(next);
}

  function getactive(req, res, next){
  articleService.getArtactive()
  .then(Article => res.json(Article))
  .catch(next);

}

function articleupload(req, res, next){

  let notyabeart = {"yabeart" : "false"} 
  let theusername = {"username" : req.user.username}
  let imgpath = {"path" : req.file.filename}
  let complarticle = Object.assign(req.body, theusername, notyabeart, imgpath)

  articleService.create(complarticle)
  .then(() => res.json({ message: 'Artikel erfolgreich angelegt' }))
  .catch(next);
}

function yabeeupload(req, res, next){

  let notyabeart = {"yabeart" : "true"} 
  let theusername = {"username" : req.user.username}
  let imgpath = {"path" : req.file.filename}
  let isyabeempl = {"yabeempl": req.user.yabeempl}

  let complarticle = Object.assign(req.body, theusername, notyabeart, imgpath, isyabeempl)
console.log(complarticle)
  articleService.createyabeart(complarticle)
  .then(() => res.json({ message: 'Artikel erfolgreich angelegt' }))
  .catch(next);
}

function imgupload(req, res, next){

  articleService.upload(req.file.filename)
  .then(Article => res.json(Article))
  .then(Article => res.derfilename)
  .catch(next);

}