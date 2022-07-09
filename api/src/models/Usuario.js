const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('usuario',{
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        avatar : {
            type : DataTypes.STRING,
            allowNull : true
        }
        ,
        lastname : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        telephone : {
            type : DataTypes.BIGINT,
            allowNull : false
        },
        address : {
            type : DataTypes.STRING,
            allowNull : false
        },
        birth : {
            type : DataTypes.STRING,
            allowNull : false
        },
        state : {
            type : DataTypes.BOOLEAN,
            defaultValue : true
        },
        online : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        }
    },{
        timestamps : false
    })
}