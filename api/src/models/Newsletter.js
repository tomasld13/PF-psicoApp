const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('newsletter',{
        newsletter : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },{
        timestamps : false
    })
}