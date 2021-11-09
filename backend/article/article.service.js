const { Connection } = require('mysql2');
const db = require('_helpers/db');
const config = require('config.json');
const mysql = require('mysql2/promise');
const { param } = require('./article.controller');



module.exports = {
   
    create,
    getArtById,
    getArtactive,
    upload,
    createyabeart,
    artbietenbyid,
    getallyabeart,
    getmyuploads
    
};

/*
createyabeart  bzw yabeartikel "creator", muss aufgrund der vorgabe der Firma Yabe im Backend 
die Aktuelle Zeit + 15 Minuten rechnen für die Auktionen. Somit kann über eine REST-Anfrage 
auch ohne Zeitangabe die Zeit in der Datenbank gespeichert werden. Somit ist ein einfacheres Handling 
für API Anfragen gewärleistet.
*/
async function createyabeart(req){

    if(req.user.yabeempl === "false"){
    throw "nicht gestattet";
       
      }else if(req.user.yabeempl === "true"){
       //Berechnung und Ausgabe der Uhrzeit für Anfang Auction und ende Auction
        let date = new Date();
        let stunden = date.getHours();
        let minuten = date.getMinutes();
        let minutenende = minuten + 15;
        let uhrzeit = stunden + ":" + minuten;
        let uhrzeitende = stunden + ":" + minutenende;
        let beginnauction = {"timeforauctionA": uhrzeit}
        let endauction =  {"timeforauctionE" : uhrzeitende}
       
       //username für den Artikel wird im Backend gespeichert
        let theusername = {"username" : req.user.username}

        //yabeartikel mit aufgrund des uploads über createyabeart auf "true" gesetzt
        let yabeart = {"yabeart" : "true"}

        let complarticle = Object.assign(req.body, theusername, beginnauction, endauction, yabeart)
        await db.Article.create(complarticle);

}}

async function artbietenbyid(req){
    let userhighestbid = {"userhighestbid" : req.user.username}
    let Price = {"Price" : req.body.Price}
    const article = await getArticle(req.params.id);
    const activeforbid = await getArtactive();
    //suchen des Artikels auf den Geboten werden soll in dem Array, der durch getArtactive zurückgeliefert wird.
    //ist found === undefined, steht der Artikel nicht bereit zum bieten. andernfalls steht dieser bereit zur Auktion.
    const found = activeforbid.find(element => element.id === article.id);
    
if(req.body.Price <= article.Price){
//Vergleich des Body Prices mit dem aktuellen Preis, werfen der Fehlermeldung falls geringer
throw "Erhöhen Sie das Gebot";

}else if(req.user.username === article.username){
// Usern ist es nicht gestattet auf eigene Artikel zu bieten. So könnten Sie die Preise "hochtreiben".
throw "Sie können nicht auf Ihren eigenen Artikel bieten";
}else if(found === undefined){
//Es darf nur auf Artikel geboten werden, die auch in dem Array "allActive" aufgeführt werden
throw "Auf den Artikel kann nicht geboten werden";
}else if(req.body.Price > article.Price){
    // Speichern des "updates" bzw. durchführen der Datenbank Änderung 
    let complarticle = Object.assign(userhighestbid, Price)
    Object.assign(article, complarticle);
    await article.save();
return "erfolg";

}
}

async function getallyabeart(){
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password, database });

    const allActiveyabeart = await connection.query("SELECT * FROM `articles` WHERE yabeart ='true' AND CURRENT_TIME BETWEEN timeforauctionA AND timeforauctionE;")


    return allActiveyabeart[0];
}



async function upload(param){
    let returnobject = {"filename" : param};

    return (returnobject);
}


async function create(params) {

    if(params.timeforauctionA > params.timeforauctionE){
        throw "Endzeit kann nicht vor Anfangszeit liegen"
    }else if(params.timeforauctionE > params.timeforauctionA){
        await db.Article.create(params);
    }
    
   
    
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


async function getmyuploads(params){

    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password, database });

    const sqlquery = 'SELECT * FROM articles WHERE username = ' + '"'+ params +'"' +';';
console.log(sqlquery)
    const allActive = await connection.query(sqlquery)

    return allActive[0];

}




//finden des Artikels anhand der ID, der Primary Key wird in der Datenbank abgefragt
async function getArticle(id) {
    const Article = await db.Article.findByPk(id);
    if (!Article) throw 'Article not found';
    return Article;
}