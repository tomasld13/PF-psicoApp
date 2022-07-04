const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('horarios',{
        hora : {
            type : DataTypes.TIME,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}