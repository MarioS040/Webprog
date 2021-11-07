const { Connection } = require('mysql2');
const db = require('_helpers/db');
const config = require('config.json');
const mysql = require('mysql2/promise');



module.exports = {
   
    create,
    getArtById,
    getArtactive,
    upload,
    createyabeart
    
};


async function createyabeart(req){

    if(req.user.yabeempl == "false"){
    throw "nicht gestattet";
       
      }else if(req.user.yabeempl == "true"){
        let theusername = {"username" : req.user.username}
        let complarticle = Object.assign(req.body, theusername)

        await db.Article.create(complarticle);

}}

async function upload(param){
    let returnobject = {"filename" : param};

    return (returnobject);
}


async function create(params) {
   
    await db.Article.create(params);
}

//ruft die Asynchrone Funktion getArticle auf und gibt diese wieder an die Article.controller zurück. die Daten werden dann wieder returned und anschließend ausgegeben
async function getArtById(id) {
    return await getArticle(id);
}

async function getArtactive(){

    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password, database });

    const allActive = await connection.query("SELECT * FROM `articles` WHERE CURRENT_TIME BETWEEN timeforauctionA AND timeforauctionE;")
   // const allActive = await connection.query("SELECT * FROM articles WHERE CURRENT_TIME > timeforauction;")
    return allActive[0]; // [0] da sonst ein Buffer bei der Ausgabe mitgegeben wurde, dies kann durch den INDEX [0] verhindert werden
}


//finden des Artikels anhand der ID, der Primary Key wird in der Datenbank abgefragt
async function getArticle(id) {
    const Article = await db.Article.findByPk(id);
    if (!Article) throw 'Article not found';
    return Article;
}