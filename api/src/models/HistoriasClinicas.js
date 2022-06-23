const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('HistoriasClinicas',{
        comentarios: {
            type : DataTypes.STRING,
            allowNull : false,
        }
    },
    {
        timestamps : false
    })
}