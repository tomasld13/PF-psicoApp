const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('usuario',{
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        lastname : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        telephone : {
            type : DataTypes.NUMBER,
            allowNull : false
        },
        direccion : {
            type : DataTypes.STRING,
            allowNull : false
        },
        birth : {
            type : DataTypes.DATEONLY,
            allowNull : false
        }
    },{
        timestamps : false
    })
}