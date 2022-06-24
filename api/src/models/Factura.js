const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('factura',{
        precio: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps : false
    })
}