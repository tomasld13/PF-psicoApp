const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('metodoPago',{
        metodoPago: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps : false
    })
}