const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('blog',{
        blog : {
            type : DataTypes.STRING(1024)
        }
    },{
        timestamps : false
    })
}