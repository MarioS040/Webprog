const { Connection } = require('mysql2');
const db = require('_helpers/db');
const config = require('config.json');
const mysql = require('mysql2/promise');



module.exports = {
   
    create,
    getArtById,
    getArtactive
    
};

async function create(params) {

    await db.Article.create(params);
}

async function getArtById(id) {
    return await getArticle(id);
}

async function getArtactive(){

    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password, database });


    const allActive = await connection.query("SELECT * FROM articles WHERE CURRENT_TIME > timeforauction;")
    return allActive[0]; // [0] da sonst ein Buffer bei der Ausgabe mitgegeben wurde, dies kann durch den INDEX [0] verhindert werden
}



async function getArticle(id) {
    const Article = await db.Article.findByPk(id);
    if (!Article) throw 'Article not found';
    return Article;
}