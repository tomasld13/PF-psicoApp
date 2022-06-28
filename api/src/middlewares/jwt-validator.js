const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const { Usuario, Rol } = require("../db");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
<<<<<<< HEAD
    
    // leer el usuario que corresponde al uid
=======
    console.log("ESTOY EN EL JWT Validator",id);
    // leer el usuario que corresponde al id
>>>>>>> frontend
    const user = await Usuario.findByPk(id, {
      include: {
        model: Rol,
        attributes: ["name"],
      },
    });
    console.log("ESTOY EN EL JWT Validator",user.toJSON())

    if (!user) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe DB",
      });
    }

    // Verificar si el uid tiene estado true
    if (!user.state) {
      return res.status(401).json({
        msg: "Token no válido - usuario con estado: false",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};

module.exports = validarJWT;