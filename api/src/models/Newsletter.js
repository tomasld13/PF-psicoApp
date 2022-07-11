const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('newsletter',{
        newsletter : {
            type : DataTypes.STRING,
        },
    },{
        timestamps : false
    })
}