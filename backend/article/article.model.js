const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        articleName: {type: DataTypes.STRING, allowNull: false },
        articleDescription: { type: DataTypes.STRING, allowNull: false },
        Price: { type: DataTypes.INTEGER, allowNull: false },
        path: { type: DataTypes.STRING, allowNull:  true},
        yabeart: { type: DataTypes.STRING, allowNull: true },
        timeforauctionA: { type: DataTypes.STRING, allowNull: false },
        timeforauctionE: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        userhighestbid:{ type: DataTypes.STRING, allowNull: true },
    };

    

    return sequelize.define('Article', attributes);
}