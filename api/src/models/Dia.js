const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('dia',{
        fecha : {
            type : DataTypes.DATEONLY,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}