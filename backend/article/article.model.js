const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        articleName: { type: DataTypes.STRING, allowNull: false },
        articleDescription: { type: DataTypes.STRING, allowNull: false },
        Price: { type: DataTypes.STRING, allowNull: false },
    };

    

    return sequelize.define('Article', attributes);
}