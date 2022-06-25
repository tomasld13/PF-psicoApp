const {Usuario} = require('../models/Usuario');
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
    const user = await Usuario.findByPk(id);
    if (!user) {
      throw new Error(`No existe el usuario con el id ${id}`);
    }
  };

  module.exports = {
    verficarEmail,
    verificarId
  }