const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('psicologo', {
    yearsExperience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inicioHorario: {
      type: DataTypes.TIME
    },
    finHorario: {
      type: DataTypes.TIME
    },
    intervaloSesion: {
      type: DataTypes.INTEGER
    }
  },
    
    {
      timestamps: false
    });
};