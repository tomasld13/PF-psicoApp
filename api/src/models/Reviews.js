const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('reviews', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false
        })
}