const {DataTypes }= require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('precio',{
        costo: {
            type : DataTypes.INTEGER
        }
    },
    {
        timestamps : false
    })
}