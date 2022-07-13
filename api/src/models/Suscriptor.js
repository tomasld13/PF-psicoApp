const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('suscriptor',{
        mail : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}