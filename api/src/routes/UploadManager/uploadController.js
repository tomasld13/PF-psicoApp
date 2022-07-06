

const { Usuario } = require('../../db');
const { response } = require('express');


require('dotenv').config();
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL)





const actualizarImagenCloudinary = async(req,res=response)=>{
    const {id} = req.params
    
    const user = await Usuario.findByPk(id);
    if(!user){
        return res.status(400).json({msg: `No existe un usuario con el id ${id}`});
    }

    const {tempFilePath} = req.files.archivo;
    const {secure_url} =  await cloudinary.uploader.upload(tempFilePath);

    
    user.avatar = secure_url;
    await user.save();
    res.json(user)
}


module.exports = {
    actualizarImagenCloudinary
}