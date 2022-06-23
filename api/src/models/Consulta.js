const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('consulta',{
        consulta : {
            type : DataTypes.STRING(500),
            allowNull : false
        },
        comentarios : {
            type : DataTypes.STRING(1000),
            allowNull : false
        },
        prescripcion : {
            type : DataTypes.STRING(500),
            allowNull : false
        }
    },{
        timestamps : false
    })
}