const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('genero',{
        genero : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}