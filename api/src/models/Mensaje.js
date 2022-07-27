const sequelize = require('sequelize');
const { INTEGER } = require('sequelize');
const {DataTypes} = require('sequelize');
const Usuario = require('./Usuario');

module.exports = (sequelize)=>{
    sequelize.define('mensaje',{
        
        mensaje : {
            type : DataTypes.STRING,
            require : true
        }
    })
}