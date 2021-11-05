const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        articleName: {type: DataTypes.STRING, allowNull: false },
        articleDescription: { type: DataTypes.STRING, allowNull: false },
        Price: { type: DataTypes.STRING, allowNull: false },
        artimg: { type: DataTypes.STRING, allowNull:  true},
        yabeart: { type: DataTypes.STRING, allowNull: true },
        timeforauctionA: { type: DataTypes.STRING, allowNull: false },
        timeforauctionE: { type: DataTypes.STRING, allowNull: false },
        user: { type: DataTypes.STRING, allowNull: false },
    };

    

    return sequelize.define('Article', attributes);
}