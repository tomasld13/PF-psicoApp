const {response, request} = require('express');
const jwt = require('jsonwebtoken');


const esAdminRol = (req,res = response, next)=>{
    if(!req.user){
        return res.status(500).json({
            msg : 'Se requiere verificar el rol'
        })
    }
    const {rolId, name } = req.user;
    if(rolId!==3){
        return res.status(401).json({
            msg : `${name} no está autorizado para realizar esta gestión. Hable con el administrador`
        })
    }

    next();
}

module.exports = {
    esAdminRol
}