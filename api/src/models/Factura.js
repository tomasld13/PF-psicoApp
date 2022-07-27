const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('factura',{
        status:{
            type:DataTypes.ENUM('created', 'processing', 'cancelled', 'paid'),
            allowNull:false,
        },
        payment_id:{
            type:DataTypes.INTEGER,
            defaultValue: 0,
        },
        payment_status:{
            type: DataTypes.STRING,
            defaultValue: '',
        },
        merchant_order_id:{
            type: DataTypes.BIGINT,
            defaultValue: 0,
        },
        fecha: {
            type: DataTypes.DATEONLY
        },
        precio: {
            type: DataTypes.INTEGER
        },
        saldado: {
            type: DataTypes.BOOLEAN
        },
        servicio: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps : false
    })
}