const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('reviews',{
        rating: {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        comment: {
            type : DataTypes.STRING,
            allowNull : false,
        }
    },
    {
        timestamps : false
    })
}