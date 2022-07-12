const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('favoritos',{
        psicofavorito: {
            type : DataTypes.STRING,
            allowNull : false
        },
        idPsico: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps : false
    })
}