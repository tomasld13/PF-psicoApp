const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('favoritos',{
        psicofavorito: {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}