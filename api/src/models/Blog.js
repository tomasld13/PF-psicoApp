const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('blog',{
        blog : {
            type : DataTypes.TEXT
        }
    })
}