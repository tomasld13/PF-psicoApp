

const { Usuario } = require('../../db');
const { response } = require('express');


require('dotenv').config();
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL)





const actualizarImagenCloudinary = async(req,res=response)=>{
    const {id} = req.params
    try {
        const user = await Usuario.findByPk(id);
        if(!user){
            return res.status(400).json({msg: `No existe un usuario con el id ${id}`});
        }
        if(user.avatar){
            const nombreArr = user.avatar.split('/');
            const nombre = nombreArr[nombreArr.length-1];
            const [public_id] = nombre.split('.');
            cloudinary.uploader.destroy(public_id);
        }
        const {tempFilePath} = req.files.archivo;
        const {secure_url} =  await cloudinary.uploader.upload(tempFilePath);        
        user.avatar = secure_url;
        await user.save();
        res.json(user)
        zz
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


module.exports = {
    actualizarImagenCloudinary
}