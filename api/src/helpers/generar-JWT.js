const jwt = require('jsonwebtoken');

const generarJWT = (id)=>{
    return new Promise((resolve, reject)=>{
        const payload = {id};
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {expiresIn : '4h'},(err,token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve(token)
            }
        })
    })
}
const comprobarJWT = ( token = '' ) => {

    try {
        const { id } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        console.log('ESTO ES EL VERIFY DEL TOKEN EN COMPROBARJWT: ',jwt.verify( token, process.env.SECRETORPRIVATEKEY ))
        return [ true, id ];

    } catch (error) {
        return [ false, null ];
    }

}


module.exports = {
    generarJWT,
    comprobarJWT
}