const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        //definieren des Models für einen User, dieser wird anschließend in der Datenbank gespeichert. (keine Optionalen Felder)
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // hash exluden
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // Einbeziehen des Hashes in dieser Funktion
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}