const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('ciudad',{
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },{
        timestamps : false
    })
}