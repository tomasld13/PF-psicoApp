const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('horarios',{
        fecha : {
            type : DataTypes.DATE,
            allowNull : false
        },
        horario: {
            type : DataTypes.TIME,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}