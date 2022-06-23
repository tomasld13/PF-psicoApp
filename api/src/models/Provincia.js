const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('provincia',{
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },{
        timestamps : false
    })
}