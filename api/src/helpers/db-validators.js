const {Usuario} = require('../db');
const verficarEmail = async (email = "") => {
    const user = await Usuario.findOne({
      where: {
        email,
      },
    });
    if (user) {
      throw new Error(`Ya existe el email ${email}`);
    }
  };
  const verificarId = async (id = "") => {
    console.log("ESTOY EN EL VERIFICAR ID: ", id)
    const user = await Usuario.findByPk(id);
    if (!user) {
      throw new Error(`No existe el usuario con el id ${id}`);
    }
  };

  module.exports = {
    verficarEmail,
    verificarId
  }