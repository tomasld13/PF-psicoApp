const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('testimonio',{
        testimonio : {
            type : DataTypes.STRING,
            allowNull : false
        },
        paciente : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    },{
        timestamps : false
    })
}