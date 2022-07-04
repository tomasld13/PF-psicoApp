const {DataTypes }= require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('servicio',{
        servicio : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}