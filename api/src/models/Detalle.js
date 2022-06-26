const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('detalle',{
        fecha : {
            type : DataTypes.DATE,
            allowNull : false
        },
        hora : {
            type: DataTypes.TIME,
            allowNull: false
        }
    },
    {
        timestamps : false
    })
}