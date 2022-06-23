const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('especialidades',{
        especialidad : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },
    {
        timestamps : false
    })
}