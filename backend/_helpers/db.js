const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {

    // Datenbank anlegen, wenn diese noch nicht besteht
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // Datenbankverbindung aufbauen mit in "config.json" gegebenen Credentials
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // initialisieren der user und Artikel Datenbank
    db.User = require('../users/user.model')(sequelize);
    db.Article = require('../article/article.model')(sequelize);
   
   
   
    //"pushen" aller Modelle mit der Datenbank, hier wird der call eröffnet die ELemente in die Datenbank zu schreiben
    await sequelize.sync();
}