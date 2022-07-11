const {DataTypes} = require('express');

module.exports = (sequelize)=>{
    sequelize.define('newsletter',{
        newsletter : {
            type : DataTypes.STRING
        },
    },{
        timestamps : false
    })
}