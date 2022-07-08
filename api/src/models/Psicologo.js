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
    },
    cbu:{
      type: DataTypes.STRING
    },
    matriculaProfesional:{
      type: DataTypes.STRING,
      unique: true
    },
    sobreMi:{
      type: DataTypes.TEXT('long')
    },
    pacientesAtendidos : {
      type : DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue : []
    }
  },
    
    {
      timestamps: false
    });
};